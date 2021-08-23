import React, {useState} from 'react'

function Item({card}) {
    const [showLogo, setShowLogo] = useState(true)
    return (
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ? (
                <>
                    <img className="card-logo" src={card.img} alt="img" />
                    <h3 className="card-title">{card.name}</h3>
                </>
            ) : (
                <ul className="list">
                    {card.options.map((optEl,i)=>{
                        return <li key={i}>
                            {optEl}
                        </li>
                    })}
                </ul>
            )}
            
        </div>
    )
}

export default Item
