import React, { Component } from "react";

export class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = { entry: "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="Search ..."
                onChange={(e) => this.setState({ entry: e.target.value })}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
            <p>{this.state.entry}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
