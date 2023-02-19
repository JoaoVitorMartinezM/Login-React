import React from "react";





function Input(props){
    return (

        <>
            <input type="text" className="form-control" id="login" placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
        </>
            
        

    )
}


export default Input;