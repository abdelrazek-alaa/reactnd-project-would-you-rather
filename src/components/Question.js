import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Question extends Component {
  handleClick = () => {
    const { questionId, history } = this.props;
    history.push(`questions/${questionId}`);
  };

  render() {
    const { authorAvatarURL, authorName, qOptionOne } = this.props;
    //console.log(this.props);
    return (
      <Paper
        sx={{
          border: 1,
          borderColor: "divider",
          p: 2,
          mx: "auto",
          mb: 2,
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid p={3} mr={3} item>
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt={`${authorName} Avatar`}
              src={authorAvatarURL}
            />
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="h6">
                  {authorName} Asks:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Would you rather
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {qOptionOne} or ...
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={this.handleClick} variant="outlined">
                  View Poll
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

function mapStateToProps({ questions, users }, { questionId }) {
  const question = questions[questionId];
  return {
    qOptionOne: question.optionOne.text,
    authorName: users[question.author].name,
    authorAvatarURL: users[question.author].avatarURL,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
