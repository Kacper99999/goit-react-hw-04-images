import React,{Component} from "react";
import propTypes from "prop-types";

export default class Searchbar extends Component{

    handleSubmit = (e) =>{
        const {onSubmit} = this.props
        e.preventDefault(); 
            const inputValue = e.target.elements.search.value; 
            onSubmit(inputValue); 
    }
    render(){
       
            
        return(
            <header className="Searchbar">
            <form onSubmit={this.handleSubmit} className="Searchform ">
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
}


Searchbar.propTypes = {
    onSubmit : propTypes.func.isRequired
}