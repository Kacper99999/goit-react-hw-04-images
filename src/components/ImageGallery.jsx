import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types"

export default function ImageGallery({images}) {
    
        return(
            <ul className="ImageGallery">
                {images.map((image) =>(
                    <ImageGalleryItem key={image.id} image={image}/>
                ))}
            </ul>
            )

}
ImageGallery.propTypes = {
    images : propTypes.arrayOf(
        propTypes.shape({
            id : propTypes.number.isRequired
        }    
        )
    )
}