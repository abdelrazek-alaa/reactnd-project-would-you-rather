import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import QuestionOption from "./QuestionOption";
import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";

class PollDetails extends Component {
  render() {
    const { authorName, authorAvatarURL, optionOne, optionTwo, question } =
      this.props;

    if (question === null) {
      return <ErrorPage />;
    }

    return (
      <Grid mt={2} container direction="row" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Card sx={{ border: 1, borderColor: "divider" }}>
            <CardHeader
              avatar={
                <Avatar src={authorAvatarURL} aria-label="avatar"></Avatar>
              }
              title={`Asked by ${authorName}`}
            />
            <CardContent>
              <Typography variant="h6">Results:</Typography>
              <QuestionOption question={question} optionOne={optionOne} />
              <QuestionOption question={question} optionTwo={optionTwo} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ questions, users }, { questionId }) {
  const question = questions[questionId];

  return {
    question: question ? question : null,
    authorName: question ? users[question.author].name : null,
    authorAvatarURL: question ? users[question.author].avatarURL : null,
    optionOne: question ? question.optionOne.text : null,
    optionTwo: question ? question.optionTwo.text : null,
  };
}

export default connect(mapStateToProps)(PollDetails);
