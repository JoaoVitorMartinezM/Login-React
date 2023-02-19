import "./Label.css"
import React from "react"

const Label = (props) => {
    return(
        <>
            <label className="form-label">{props.name}</label>
            
        </>
        
    )
}

export default Label;
