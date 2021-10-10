import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import QuestionOption from "./QuestionOption";
import { connect } from "react-redux";

function PollDetails(props) {
  const { authorName, authorAvatarURL, optionOne, optionTwo, question } = props;

  return (
    <Grid mt={2} container item direction="row" justifyContent="center">
      <Card sx={{ border: 1, borderColor: "divider" }}>
        <CardHeader
          avatar={<Avatar src={authorAvatarURL} aria-label="avatar"></Avatar>}
          title={`Asked by ${authorName}`}
        />
        <CardContent>
          <Typography variant="h6">Results:</Typography>
          <QuestionOption question={question} optionOne={optionOne} />
          <QuestionOption question={question} optionTwo={optionTwo} />
        </CardContent>
      </Card>
    </Grid>
  );
}

function mapStateToProps({ questions, users }, { questionId }) {
  const question = questions[questionId];

  return {
    question,
    authorName: users[question.author].name,
    authorAvatarURL: users[question.author].avatarURL,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text,
  };
}

export default connect(mapStateToProps)(PollDetails);
