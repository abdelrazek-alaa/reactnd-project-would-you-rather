import React, { Component } from "react";
import { connect } from "react-redux";
import UserRank from "./UserRank";
class LeaderBoard extends Component {
  render() {
    const { usersIds } = this.props;
    return usersIds.map((uid) => <UserRank key={uid} userId={uid} />);
  }
}
function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
  };
}
export default connect(mapStateToProps)(LeaderBoard);
