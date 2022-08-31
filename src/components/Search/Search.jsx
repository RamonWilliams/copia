import "./Search.css"


const Search = ({setFilterWord}) => {
    return (
        
     <input type="text" id="search" className="buscador" onChange={()=> setFilterWord(search.value.toLowerCase()) } placeholder= "Search pet" />
    )
}

export default Search;