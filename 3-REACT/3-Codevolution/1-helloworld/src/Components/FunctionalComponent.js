import React from "react";

// function Greet(){
//     return (<p>Hi Murat this is a functional componet</p>)
// }

const Greet = props =>{
    const {name,heroName} = props
    return (
        <div>
            <p>Hello {name} a.k.a {heroName}</p>
            {/* {props.children} */}
        </div>
    )
}

// const ShowName = props =>{
//     return <a href="/">{props.ad || "misafir"}</a>
// }

// export default ShowName
export default Greet