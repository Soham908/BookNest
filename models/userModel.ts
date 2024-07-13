import mongoose from "mongoose";

const userBookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: Number, required: true },
    bankAccount: { type: String },
    bookPrice: { type: Number },
    quantity: { type: Number },
})

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    boughtBook: [userBookSchema],
    sellBook: [userBookSchema],
    likedBooks: [userBookSchema],
})

const userModel = mongoose.models.userModel || mongoose.model('userModel', userSchema)
module.exports = userModel