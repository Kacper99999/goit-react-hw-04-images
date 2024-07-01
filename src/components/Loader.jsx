import React,{Component} from "react";
import { Oval } from 'react-loader-spinner';
import propTypes from "prop-types";
export default class Loader extends Component{

    render(){
        const {loading} = this.props
        return(
            
            loading && <div className="Loader"> <Oval 
                height={80} 
                width={80} 
                radius={80} 
                color="white"
                secondaryColor="blue"
                ariaLabel="loading" 
                wrapperClassName="loader-wrapper" 
                />
            </div>
        )
    }
}

Loader.propTypes = {
    loading : propTypes.func.isRequired
}