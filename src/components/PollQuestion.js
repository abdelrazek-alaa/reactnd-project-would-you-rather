import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Button, Grid } from "@mui/material";
import { connect } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ErrorPage from "./ErrorPage";
import { handleSaveQuestionAnswer } from "../actions/shared";

class PollQuestion extends Component {
  state = {
    formVal: "",
  };
  handleChange = (e) => {
    this.setState(() => ({
      formVal: e.target.value,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, questionId, dispatch } = this.props;
    const answer = this.state.formVal;
    if (answer) {
      dispatch(
        handleSaveQuestionAnswer({ authedUser, qid: questionId, answer })
      );
    }
  };
  render() {
    const { formVal } = this.state;
    const { authorName, authorAvatarURL, optionOne, optionTwo, question } =
      this.props;
    //console.log(this.props);
    if (question === null) {
      return <ErrorPage />;
    }
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
            avatar={<Avatar src={authorAvatarURL} aria-label="avatar"></Avatar>}
            title={`${authorName} asks:`}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          />
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <FormControl sx={{ width: "100%" }} component="fieldset">
                <FormLabel component="legend">Would You Rather...</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue=""
                  name="radio-buttons-group"
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value={"optionOne"}
                    control={<Radio />}
                    label={optionOne}
                  />
                  <FormControlLabel
                    value={"optionTwo"}
                    control={<Radio />}
                    label={optionTwo}
                  />
                </RadioGroup>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={formVal === ""}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  const question = questions[questionId];

  return {
    question: question ? question : null,
    authorName: question ? users[question.author].name : null,
    authorAvatarURL: question ? users[question.author].avatarURL : null,
    optionOne: question ? question.optionOne.text : null,
    optionTwo: question ? question.optionTwo.text : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(PollQuestion);
