import React from "react";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types";

export default function Searchbar ({imageURL, alt, children}){

    const openLightbox = () => {
        const instance = basicLightbox.create(`
            <img src="${imageURL}" alt="${alt}" />
        `);
        instance.show();
    };

        return(
            <div className="Modal " onClick={openLightbox}>
                {children}
            </div>
        )
    
}

Searchbar.propTypes = {
    imageURL : propTypes.string.isRequired,
    alt : propTypes.string.isRequired,
    children : propTypes.node.isRequired
}