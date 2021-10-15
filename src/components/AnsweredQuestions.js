import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class AnsweredQuestions extends Component {
  render() {
    const { answeredQuestionsIds } = this.props;
    return (
      <div>
        {answeredQuestionsIds.map((qid) => (
          <Question key={qid} questionId={qid} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    answeredQuestionsIds: Object.keys(users[authedUser].answers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}
export default connect(mapStateToProps)(AnsweredQuestions);
