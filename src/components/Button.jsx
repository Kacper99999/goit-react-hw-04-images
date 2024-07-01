import React,{Component} from "react";
import propTypes from 'prop-types';

export default class Button extends Component{

    render(){
        const {increment} = this.props
        return(
            <div className="Divbutton">
                <button className="Button" onClick={increment}>Load more</button>
            </div>
        )
    }
}

Button.propTypes = {
    increment : propTypes.func
}
