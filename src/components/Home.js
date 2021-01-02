import axios from "axios"
import { useEffect, useState,  } from "react"
import { MediaCard } from "./MediaCard"



export function Home(props){

    const [APOD, setAPOD] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/home").then(res => {
            setAPOD(res.data)
        })
    },[])


    return(
        <div>
            <MediaCard APOD={APOD} />
        </div>
    )
}

