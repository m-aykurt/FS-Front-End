import React, {useState} from 'react'

function Item(card) {
    const [show, setShow] = useState(true);

    const toggle = () => {
        setShow(!show);
      };

    return (
        <div onClick={() => setShow(!show)}>
           {setShow ? (
               <p>{card?.email}</p>
           ) : (null)}
        </div>
    )
}

export default Item
