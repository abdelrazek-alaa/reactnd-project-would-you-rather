import React, { Component } from "react";
import { connect } from "react-redux";

class AnsweredQuestions extends Component {
  render() {
    const { answeredQuestionsIds } = this.props;
    console.log(this.props);
    return (
      <div>
        <ul>
          {answeredQuestionsIds.map((id) => (
            <li key={id}>Question id {id}</li>
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
