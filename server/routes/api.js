const express = require("express")
const router = express.Router()
const axios = require('axios')
const FavoriteImage = require('../models/favImages')

const api_key = "K19mV6msiWH8Ld3H9iEPbVssaEVR518Zb1F159qZ"

router.get('/home', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
        const { title, url, media_type, explanation } = response.data
        const relevantData = { title, url, media_type, explanation }

        res.status(200).json(relevantData)
    } catch (err) {
        res.status(404).json(err)
    }
})

router.get('/favorites', async (req, res) => {
    try {
        const favoritesImages = await FavoriteImage.find({})
        res.status(200).json(favoritesImages)
    } catch (err) {
        res.status(404).json(err)
    }
})

router.get('/search/:inputValue', async (req, res) => {
    try {
        const { inputValue } = req.params
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${inputValue}`)
        const relevantData = response.data.collection.items
            .filter(items => items.links)
            .map(items => {
                return {
                    title: items.data[0].title,
                    description: items.data[0].description,
                    imgURL: items.links[0].href
                }
            })
        res.status(200).json(relevantData)
    } catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/favorites/:id', async (req, res) => {
    try{
        const {id} = req.params
        const deletedImage = await FavoriteImage.findByIdAndDelete(id)
    
        res.status(200).json(deletedImage._id)
    }catch(err){
        res.status(404).json(err)
    }
})

router.post('/favorites', async (req, res) => {
    try{
        const likedImage = req.body
        const newImage =  await new FavoriteImage(likedImage).save()
        
        res.status(200).json(newImage)
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router