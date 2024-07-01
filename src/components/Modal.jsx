import React,{Component} from "react";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types";

export default class Searchbar extends Component{

    openLightbox = () => {
        const { imageURL, alt } = this.props;
        const instance = basicLightbox.create(`
            <img src="${imageURL}" alt="${alt}" />
        `);
        instance.show();
    };

    render(){


        return(
            <div className="Modal " onClick={this.openLightbox}>
                {this.props.children}
            </div>
        )
    }
}

Searchbar.propTypes = {
    imageURL : propTypes.string.isRequired,
    alt : propTypes.string.isRequired,
    children : propTypes.node.isRequired
}