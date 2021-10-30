import React from "react";
import { connect } from "react-redux";
import PollDetails from "./PollDetails";
import PollQuestion from "./PollQuestion";

function QuestionId(props) {
  const { IsQuestionAnswered, qid } = props;

  if (IsQuestionAnswered) {
    return <PollDetails questionId={qid} />;
  }

  return <PollQuestion questionId={qid} />;
}

function mapStateToProps({ authedUser, users }, { match }) {
  const userAnsweredQuestionsIds = Object.keys(users[authedUser].answers);
  const qid = match.params.id;
  return {
    authedUser,
    qid,
    IsQuestionAnswered: userAnsweredQuestionsIds.includes(qid),
  };
}

export default connect(mapStateToProps)(QuestionId);
