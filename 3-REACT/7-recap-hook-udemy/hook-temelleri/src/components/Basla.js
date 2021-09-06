import React from 'react'

function Basla() {

    const basla =()=>{
        console.log("Temel React Hooks ile Başlayalım ! ")
    }

    return (
        <div>
            <h2>Merhaba React Hooks</h2>
            <button onClick={basla}> Hadi Baslayalım</button>
        </div>
    )
}

export default Basla
