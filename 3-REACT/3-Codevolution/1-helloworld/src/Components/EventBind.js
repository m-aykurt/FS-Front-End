import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"goodbye !"
    //     })
    //     console.log(this);
    // }    

    clickHandler = () =>{
        this.setState({
            message : "goodbye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   this method will be cause problem  */}
                {/* <button onClick={()=>this.clickHandler()}>Click 2</button>  this is second method*/}
                <button onClick={this.clickHandler.bind(this)}>Click 423</button> 
            </div>
        )
    }
}

export default EventBind
