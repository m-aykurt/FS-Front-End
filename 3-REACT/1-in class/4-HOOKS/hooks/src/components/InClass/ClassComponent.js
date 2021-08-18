import React, { Component } from "react";

export class ClassComponent extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       counter: 0,
  //     };
  //     this.increase = this.increase.bind(this);
  //   }

  state = {
    counter: 0,
  };

  componentDidMount(){
      console.log("component did mount")
  }

  componentDidUpdate(){
      console.log("component did update")
  }

  componentWillUnmount(){
      console.log("componentWillUnmount")
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent;
