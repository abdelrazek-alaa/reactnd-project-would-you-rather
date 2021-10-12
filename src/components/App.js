import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionsContainer from "./QuestionsContainer";
import NavBar from "./NavBar";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loadingBar } = this.props;
    let loading = true;
    if (loadingBar === 0) {
      loading = false;
    }
    if (loading) {
      return (
        <LoadingBar style={{ backgroundColor: "#1976d2", height: "5px" }} />
      );
    }

    return (
      <div>
        <NavBar />
        <QuestionsContainer />
      </div>
    );
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loadingBar: loadingBar.default,
  };
}

export default connect(mapStateToProps)(App);
