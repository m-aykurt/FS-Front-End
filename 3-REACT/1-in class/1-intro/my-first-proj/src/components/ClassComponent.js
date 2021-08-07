import React from "react";


class ClassComponent extends React.Component{
    render() {
        return (
            <div className = "wrapper">
                <div>
                    <h1>Hello World !</h1>
                    <p>Class Component</p>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default ClassComponent;