import React from "react";

const Hello = (props) =>{
    return (
        <div>
            <p>Hello {props.name} a.k.a {props.heroName}</p>
            {props.children}
            
        </div>
    )
}

export default Hello