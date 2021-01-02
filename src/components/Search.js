import axios from "axios"
import { useEffect, useState } from "react"
import { MediaCard } from "./MediaCard"
import { SearchBar } from "./SearchBar"


export function Search(props) {
    const [inputValue, setInputValue] = useState(null)
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/search/${inputValue}`).then(res => {

            setSearchData(res.data)
        })
    }, [inputValue])

    const handleInput = (value) => {
        setInputValue(value)
    }

    const addToFavorite = async (favorite) => {
        await axios.post('http://localhost:8080/favorites', favorite)
    }

    return (
        <div>
            <SearchBar key="searchBar" handleInput={handleInput} />
            <MediaCard
                key={searchData.map(key => key.imgURL)}
                searchData={searchData}
                input={inputValue} addToFavorite={addToFavorite} />
        </div>
    )
}