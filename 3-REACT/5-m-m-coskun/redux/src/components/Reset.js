import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { reset } from "../redux/actions/counterActions";
import { connect } from "react-redux";

class Reset extends Component {
    render() {
        return (
            <div>
                <button
          onClick={(e) => {
            this.props.dispatch(reset());
          }}
        >
          RESET
        </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(reset, dispatch) };
  }
  
  export default connect(mapDispatchToProps)(Reset);
  