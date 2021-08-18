import React, { Component } from "react";

export default class Collapse extends Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    };
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  // componentDidMount(){
  //   console.log("component olusturuldu")
  // }


  // componentDidUpdate(){
  //   console.log("component guncellendi..")
  // }



  render() {
    return (
      <div>
        <p>
          <button className="btn btn-primary w-100" onClick={this.showMore}>
            {/* {this.props.children.props.cardTitle} */}
            {React.Children.map(this.props.children, children => children.props.cardTitle)}
          </button>
        </p>
        {this.state.showContent ? (
          <div className="collapse show">
            {this.props.children}
            {React.Children.map(this.props.children, children => children)}

          </div>
        ) : null}
      </div>
    );
  }
}
