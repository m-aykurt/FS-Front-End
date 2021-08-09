import React from 'react'

function User() {

    let user= {
        name:"murat",
        age:29,
        location: "kırklareli"
    }

    return (
        <div>
            <h3>Username: {user.name}</h3>
            <h4>Age: {user.age}</h4>
            <h4>Location: {user.location}</h4>
        </div>
    )
}

export default User