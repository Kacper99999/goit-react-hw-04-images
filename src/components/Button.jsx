import React from "react";
import propTypes from 'prop-types';

export default function Button({increment}) {

        return(
            <div className="Divbutton">
                <button className="Button" onClick={increment}>Load more</button>
            </div>
        )
    
}

Button.propTypes = {
    increment : propTypes.func
}
