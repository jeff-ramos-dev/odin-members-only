require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { COUNTRY_CODES } = require("./country-codes.js")

const mongoDb = process.env.MONGO_DB;

mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
    "User",
    new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, match: /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}/ },
        username: { type: String, required: true },
        password: { type: String, required: true },
        membershipStatus: { type: String, match: /(user)|(member)/, required: true },
    })
);

const Post = mongoose.model(
    "Post",
    new Schema({
        author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        date_created: { type: Date, required: true },
        title: { type: String, required: true, maxLength: 60 },
        text: { type: String, maxLength: 1000 },
    })
);

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.set("views", __dirname);
app.set("view engine", "ejs");

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({
                username: username,
            });
            if (!user) {
                return done(null, false, {
                    message: "Username not found",
                });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return done(null, false, {
                    message: "Incorrect password",
                });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.get("/", (req, res) => res.render("index", { user: req.user, country_codes: COUNTRY_CODES }));
app.get("/sign-up", (req, res) => res.render("sign-up-form", { country_codes: COUNTRY_CODES}));
app.post("/sign-up", async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
            return next(err);
        } else {
            const user = new User({
                name: req.body["firstName"] + " " + req.body["lastName"],
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
                membershipStatus: "user"
            });
            if (req.body.phone) {
                const phoneRegex = /[\(\)\s-\.]/g
                const sanitizedPhone = `+${req.body["country-code"]} ${req.body.phone.replace(phoneRegex, "")}`
                user.phone = sanitizedPhone
            }
            const result = await user.save();
            res.redirect("/login");
        }
    });
});

app.get("/login", (req, res) => res.render("login"))
app.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })
);

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});


app.listen(3000, () => console.log("app listening on port 3000!"));
