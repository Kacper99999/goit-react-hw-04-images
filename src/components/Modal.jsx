import React from "react";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import propTypes from "prop-types";

export default function Modal ({imageURL, alt, children}){

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

Modal.propTypes = {
    imageURL : propTypes.string,
    alt : propTypes.string,
    children : propTypes.node
}