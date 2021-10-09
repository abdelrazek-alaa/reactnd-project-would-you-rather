import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class AnsweredQuestions extends Component {
  render() {
    const { answeredQuestionsIds } = this.props;
    // console.log(this.props);
    return (
      <div>
        <ul>
          {answeredQuestionsIds.map((qid) => (
            <Question key={qid} questionId={qid} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    answeredQuestionsIds: Object.keys(users[authedUser].answers),
  };
}
export default connect(mapStateToProps)(AnsweredQuestions);
