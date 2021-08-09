import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHnadler(){
        console.log("clicked the button");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHnadler}>Click with Class</button>
            </div>
        )
    }
}

export default ClassClick
