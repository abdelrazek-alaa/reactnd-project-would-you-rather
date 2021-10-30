import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

function AnsweredQuestions(props) {
  const { answeredQuestionsIds } = props;
  return (
    <div>
      {answeredQuestionsIds.map((qid) => (
        <Question key={qid} questionId={qid} />
      ))}
    </div>
  );
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    answeredQuestionsIds: Object.keys(users[authedUser].answers).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}
export default connect(mapStateToProps)(AnsweredQuestions);
