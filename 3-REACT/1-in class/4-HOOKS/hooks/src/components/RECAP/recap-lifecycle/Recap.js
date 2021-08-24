import React, { Component } from "react";

export class Recap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "constructor method",
      data: [],
    };
  }

  static getDerivedStateFromPorps(props, state) {
    return { name: props.name };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      document.getElementById("current-state").innerHTML
  }

  render() {
    return ( 
      <div>
        <p>this is {this.state.name}</p>
        <p>this will print the names available in API users data</p>
        {this.state.data.map((d)=>(
            <h6 key={d.id}>{d.name}</h6>
        ))}


       
      </div>
    );
  }
}
