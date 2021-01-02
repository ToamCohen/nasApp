const mongoose = require('mongoose')
const Schema = mongoose.Schema


const imagesSchema = new Schema({
    title: String,
    imgURL: String,
    description: String
})

const FavoriteImage = mongoose.model("images", imagesSchema)
// const img1 = new FavoriteImage({title: "idan", imgURL: "idan", description: "idan"})

module.exports = FavoriteImage