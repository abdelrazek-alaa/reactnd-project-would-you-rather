import React, { Component } from "react";
import { connect } from "react-redux";

class UnansweredQuestions extends Component {
  render() {
    const { unansweredQuestionsIds } = this.props;
    console.log(this.props);
    return (
      <div>
        <ul>
          {unansweredQuestionsIds.map((id) => (
            <li key={id}>Question id {id}</li>
          ))}
        </ul>
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
