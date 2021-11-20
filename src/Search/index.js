import React, { useEffect } from 'react';

const Search = (props) => {

    useEffect(() => {
       props.setSearch();
    }, [props.users, props.visibleUsers]);

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" onChange={(e) => props.setInput(e)} placeholder="Enter The Candidate Name " onKeyDown={(e) => { if(e.nativeEvent.key === "Enter") return props.setSearch()}}/>
                <button className="searchButton" onClick={props.setSearch}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;