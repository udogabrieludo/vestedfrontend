import React from 'react'

const SearchProducts = ({setSearch}) => {
    return (
        <>
            <div className="input-group col-md-9 mb-3 px-0" >
                <input type="text" className="  search-query form-control"
                  onChange={e => setSearch(e.target.value)}  placeholder="Search Investment"
                  style={{borderRadius:"10px"}}
                  />
               
            </div>
        </>
    )
}

export default SearchProducts
