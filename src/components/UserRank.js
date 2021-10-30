import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";

function UserRank(props) {
  const { userAvatar, userName, answeredQuestions, CreatedQuestions, score } =
    props;
  return (
    <Grid mt={2} container item direction="row" justifyContent="center">
      <Card
        sx={{
          border: 1,
          borderColor: "divider",
          width: { xs: "90%", md: "35%" },
        }}
      >
        <CardHeader
          avatar={<Avatar src={userAvatar} aria-label="avatar"></Avatar>}
          sx={{ borderBottom: 1, borderColor: "divider" }}
          title={userName}
        />
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Answered Questions: {answeredQuestions}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Created Questions: {CreatedQuestions}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Score: {score}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
function mapStateToProps({ users }, { userId }) {
  const user = users[userId];
  const userAnsweres = Object.keys(user.answers);
  const answeredQuestions = userAnsweres.length;
  const CreatedQuestions = user.questions.length;

  return {
    userAvatar: user.avatarURL,
    userName: user.name,
    answeredQuestions,
    CreatedQuestions,
    score: answeredQuestions + CreatedQuestions,
  };
}
export default connect(mapStateToProps)(UserRank);
