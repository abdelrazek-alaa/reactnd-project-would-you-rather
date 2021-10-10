import * as React from "react";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { connect } from "react-redux";

function QuestionOption(props) {
  const {
    optionOne,
    optionTwo,
    currentUserVote,
    qOptionOneVotes,
    qOptionTwoVotes,
    totalVotes,
  } = props;

  const qOption = optionOne ? optionOne : optionTwo;
  const currentOption = optionOne ? "optionOne" : "optionTwo";
  const optionVotes = optionOne ? qOptionOneVotes : qOptionTwoVotes;
  const percentage = Math.round((optionVotes / totalVotes) * 100);
  const isItTheAnswer = currentUserVote === currentOption ? true : false;

  const bgcolor = isItTheAnswer ? "#e8f5e9" : null;
  const borderColor = isItTheAnswer ? "#81c784" : "divider";

  return (
    <Box
      sx={{
        border: 1,
        p: 2,
        mt: 1,
        borderColor: borderColor,
        bgcolor: bgcolor,
      }}
    >
      {isItTheAnswer && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 35 }} />
          <Typography variant="subtitle2">Your Vote</Typography>
        </Box>
      )}

      <Typography variant="h6">Would you rather {qOption}? </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            color="success"
            variant="determinate"
            value={percentage}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="text.secondary"
          >{`${percentage}%`}</Typography>
        </Box>
      </Box>
      <Typography variant="h6">
        {optionVotes} out of {totalVotes} votes
      </Typography>
    </Box>
  );
}

function mapStateToProps(
  { authedUser, users },
  { question, optionOne, optionTwo }
) {
  const qOptionOneVotes = question.optionOne.votes.length;
  const qOptionTwoVotes = question.optionTwo.votes.length;
  return {
    currentUserVote: users[authedUser].answers[question.id],
    qOptionOneVotes,
    qOptionTwoVotes,
    totalVotes: qOptionOneVotes + qOptionTwoVotes,
  };
}
export default connect(mapStateToProps)(QuestionOption);
