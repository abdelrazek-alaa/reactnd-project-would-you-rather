import React from "react";
import { connect } from "react-redux";
import UserRank from "./UserRank";

function LeaderBoard(props) {
  const { usersIds } = props;
  return usersIds.map((uid) => <UserRank key={uid} userId={uid} />);
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users).sort((a, b) => {
      const a_score =
        Object.keys(users[a].answers).length + users[a].questions.length;
      const b_score =
        Object.keys(users[b].answers).length + users[b].questions.length;
      return b_score - a_score;
    }),
  };
}
export default connect(mapStateToProps)(LeaderBoard);
