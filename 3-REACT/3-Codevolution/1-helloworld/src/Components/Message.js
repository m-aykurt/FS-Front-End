import React from "react";

class Message extends React.Component {
    constructor(){
        super()
        this.state = {
            message: "welcome murat"
            
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing."
        })
    }

    render() {
        return(
            <div>
                <p>
                    {this.state.message}
                </p>
                <button onClick ={()=> {this.changeMessage()}}>Subscribe</button>
            </div>
            )
    }
}
export default Message