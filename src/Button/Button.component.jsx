import React from "react";

function Button(props){
    return(
        <button onClick={()=>{
            if(props.value==="0"){
                props.change(`${props.label}`)
            }
            else{
                props.change(props.value + props.label) 
            }
            

        }}>{props.label}</button>
    )
}

export default Button