import * as React from "react";
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

function PollQuestion(props) {
  const { authorName, authorAvatarURL, optionOne, optionTwo } = props;

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
          <form>
            <FormControl sx={{ width: "100%" }} component="fieldset">
              <FormLabel component="legend">Would You Rather...</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={optionOne}
                  control={<Radio />}
                  label={optionOne}
                />
                <FormControlLabel
                  value={optionTwo}
                  control={<Radio />}
                  label={optionTwo}
                />
              </RadioGroup>
              <Button variant="contained">Submit</Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

function mapStateToProps({ authedUser, questions, users }, { questionId }) {
  const question = questions[questionId];

  return {
    question,
    authorName: users[question.author].name,
    authorAvatarURL: users[question.author].avatarURL,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text,
  };
}

export default connect(mapStateToProps)(PollQuestion);
