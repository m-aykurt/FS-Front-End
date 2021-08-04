import React from "react";

class Welcome extends React.Component {
    render() {
        const {name,heroName}=this.props
        return <p>Welcome {name} a.k.a {heroName}</p>
    }
}

export default Welcome