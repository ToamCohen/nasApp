import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { MediaCard } from "./MediaCard"

export function Favorites(props) {
    const [favoriteImages, setFavoriteImages] = useState([])
    const [imageDetails, setImageDetails] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/favorites').then(res => {
            setFavoriteImages(res.data)
        })
    }, [])

    const removeFromFavorites = async (id) => {
        await axios.delete(`http://localhost:8080/favorites/${id}`)
        const index = favoriteImages.indexOf(f => f._id === id)
        const favorites = [...favoriteImages]
        favorites.splice(index, 1)
        setFavoriteImages(favorites)
    }

    const showDetails = (image) => {
        setImageDetails(image)
        return(
            <div>
                idan
            </div>
        )
    }


    return (
        <div>
            <MediaCard
                showDetails={showDetails}
                match={props.match}
                removeFromFavorites={removeFromFavorites}
                favoriteImages={favoriteImages} />
        </div>

    )
}