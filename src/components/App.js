import React, { useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionsContainer from "./QuestionsContainer";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import QuestionId from "./QuestionId";
import SignIn from "./SignIn";
import LoadingBar from "react-redux-loading-bar";
import { Route } from "react-router-dom";

function App(props) {
  const { loadingBar, authedUser, dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  let loading = true;
  if (loadingBar === 0) {
    loading = false;
  }
  if (loading) {
    return <LoadingBar style={{ backgroundColor: "#1976d2", height: "5px" }} />;
  }

  if (authedUser === null) {
    return <SignIn />;
  }

  return (
    <div>
      <NavBar />
      <Route path="/" exact component={QuestionsContainer} />
      <Route path="/add" component={NewQuestion} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/questions/:id" component={QuestionId} />
    </div>
  );
}

function mapStateToProps({ loadingBar, authedUser }) {
  return {
    loadingBar: loadingBar.default,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
