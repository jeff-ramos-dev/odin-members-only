require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
import { User, Post } from "./models.js";
const { COUNTRY_CODES } = require("./country-codes.js");

const mongoDb = process.env.MONGO_DB;

mongoose.connect(mongoDb);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

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

app.get("/", async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.render("templates/index", {
            user: req.user,
            title: "Members Only Message Board",
            country_codes: COUNTRY_CODES,
            posts: posts,
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.post("/sign-up", async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try {
            const existingEmail = await User.findOne({ email: req.body.email });
            if (existingEmail) {
                return res.render("templates/index", {
                    user: null,
                    country_codes: COUNTRY_CODES,
                    error: "Email already in use",
                });
            }
            const existingUsername = await User.findOne({
                username: req.body.username,
            });
            if (existingUsername) {
                return res.render("templates/index", {
                    user: null,
                    country_codes: COUNTRY_CODES,
                    error: "Username already taken",
                });
            }
            const firstName = req.body.firstName.replace(
                req.body.firstName.charAt(0),
                req.body.firstName.charAt(0).toUpperCase()
            );
            const lastName = req.body.lastName.replace(
                req.body.lastName.charAt(0),
                req.body.lastName.charAt(0).toUpperCase()
            );
            const user = new User({
                name: firstName + " " + lastName,
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword,
                date_joined: new Date(),
                membershipStatus: "user",
            });
            if (req.body.phone) {
                const phoneRegex = /[\(\)\s-\.]/g;
                const sanitizedPhone = `+${
                    req.body["country-code"]
                } ${req.body.phone.replace(phoneRegex, "")}`;
                user.phone = sanitizedPhone;
            }
            await user.save();
            res.redirect("/login");
        } catch (err) {
            next(err);
        }
    });
});

app.get("/new", function (req, res, next) {
    res.render("templates/message-form", { title: "New Message" });
});

app.post("/new", async function (req, res, next) {
    const newMessage = new Post({
        author_id: req.user._id,
        date_created: new Date(),
        subject: req.body["message-subject"],
        text: req.body["message-text"],
    });

    try {
        await newMessage.save();
        res.redirect("/");
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.get("/login", (req, res) => res.render("templates/login"));
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
