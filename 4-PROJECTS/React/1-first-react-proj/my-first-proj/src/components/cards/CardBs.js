import React from 'react'
import {data} from "../../helper/data"

function CardBs() {
    return (
        <div>
            {data.map((data)=>{
                const {id, title, desc, image }= data;
                return (
                    <div key={id} className="card">
                        <h5 className="card-title">{title}</h5>
                        <div className="card-body">
                            <img src={image} className="card-img-top" alt="img"/>
                            <p className="card-text">{desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default CardBs
