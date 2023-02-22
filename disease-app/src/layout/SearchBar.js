import './SearchBar.css'
const SearchBar = ({onSubmit, onChange, clearSearch,value}) =>{

    return(
        <div className='searchBar'>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Find a disease'
                    value = {value}
                    onChange={onChange}
                />
                {value && <span onClick={clearSearch}>X</span>}
                <button type="submit" className="btn btn-primary">Find</button>
            </form>
        </div>

    )
}
export default SearchBar;