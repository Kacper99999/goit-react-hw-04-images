import React from "react";
import propTypes from "prop-types";

export default function Searchbar ({onSubmit}){

    const handleSubmit = (e) =>{
        e.preventDefault(); 
            const inputValue = e.target.elements.search.value; 
            onSubmit(inputValue); 
    }

        return(
            <header className="Searchbar">
                <form onSubmit={handleSubmit} className="Searchform ">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm"></span>
                    </button>

                    <input
                    className="SearchForm-input"
                    type="text"
                    placeholder="Search images and photos"
                    name="search" 
                    />
                </form>
            </header>
        )
}


Searchbar.propTypes = {
    onSubmit : propTypes.func
}