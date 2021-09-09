import React from 'react'


function BookList({name,price}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default BookList
