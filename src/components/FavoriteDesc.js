import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { MediaCard } from "./MediaCard"



export function FavoriteDesc (props) {
    const id = props.match.match.params.id
    
    const [favoriteImage, setFavoriteImage] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/favorites').then(res => {
            const image = res.data.find(i => i._id === id)
            console.log(image)
            setFavoriteImage(image)
        })
    }, [])
    
    return(
        <div>
            <MediaCard favoriteImage={favoriteImage} />
        </div>
    )
}