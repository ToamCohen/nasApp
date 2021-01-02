


export function SearchBar(props){
    const {handleInput} = props

    return(
        <div>
            <input type="search" onChange={({target}) => handleInput(target.value) } />
        </div>
    )
}