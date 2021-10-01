import React from "react";
import SearchInput from "./SearchInput";
import ImageList from "../ImageList";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=23636947-659569e764c979268b6a4bf54&q=${entry}&image_type=photo&pretty=true`
    );
    this.setState({ images: response.data.hits });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
