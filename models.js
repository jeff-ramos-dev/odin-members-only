const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
    "User",
    new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: {
            type: String,
            match: /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}/,
        },
        username: { type: String, required: true },
        password: { type: String, required: true },
        date_joined: { type: Date, required: true },
        membershipStatus: {
            type: String,
            match: /(user)|(member)|(admin)/,
            required: true,
        },
    })
);

const Post = mongoose.model(
    "Post",
    new Schema({
        author_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        date_created: { type: Date, required: true },
        subject: { type: String, required: true, maxLength: 60 },
        text: { type: String, maxLength: 1000 },
    })
);

module.exports = {
    User,
    Post,
};
