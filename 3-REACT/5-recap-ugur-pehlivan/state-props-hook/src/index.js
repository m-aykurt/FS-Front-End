import React from "react";
import ReactDOM from "react-dom";
import Hemisphere from "./Hemisphere";

class App extends React.Component {
  constructor() {
    super();
    this.state = { latitude: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    return (
      <div>
        {this.state.latitude ? (
          <div>
            <Hemisphere latitude={this.state.latitude} />
          </div>
        ) : (
          <div>{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
