import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Typography } from "@mui/material";

class UnansweredQuestions extends Component {
  render() {
    const { unansweredQuestionsIds } = this.props;
    return (
      <div>
        {unansweredQuestionsIds.map((qid) => (
          <Question key={qid} questionId={qid} />
        ))}
        {unansweredQuestionsIds.length === 0 && (
          <Typography variant="subtitle1" align="center">
            you have answered all the questions.
          </Typography>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const userAnswers = Object.keys(users[authedUser].answers);
  return {
    unansweredQuestionsIds: Object.keys(questions)
      .filter((qid) => !userAnswers.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}
export default connect(mapStateToProps)(UnansweredQuestions);
