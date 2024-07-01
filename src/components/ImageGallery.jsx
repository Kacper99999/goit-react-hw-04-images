import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types"

export default class ImageGallery extends Component {
    render(){
        const {images} = this.props;
        return(
            <ul className="ImageGallery">
            {images.map((image) =>(
                <ImageGalleryItem key={image.id} image={image}/>
            ))}
        </ul>
        )
    }
}
ImageGallery.propTypes = {
    images : propTypes.arrayOf(
        propTypes.shape({
            id : propTypes.number.isRequired
        }    
        )
    )
}