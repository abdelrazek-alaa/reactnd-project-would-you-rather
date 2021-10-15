import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChange = (e) => {
    const TextFieldID = e.target.id;
    const TextFieldValue = e.target.value;
    if (TextFieldID === "optionOneTextField") {
      this.setState(() => ({
        optionOneText: TextFieldValue,
      }));
    } else if (TextFieldID === "optionTwoTextField") {
      this.setState(() => ({
        optionTwoText: TextFieldValue,
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion(optionOneText, optionTwoText));
      history.push("/");
    }
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
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
            sx={{ borderBottom: 1, borderColor: "divider" }}
            title="Create New Question"
          />
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Complete the question:
            </Typography>
            <Typography variant="h6" gutterBottom>
              Would You Rather...
            </Typography>

            <form onSubmit={this.handleSubmit}>
              <TextField
                id="optionOneTextField"
                label="Enter Option One Text Here"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <TextField
                id="optionTwoTextField"
                label="Enter Option Two Text Here"
                variant="outlined"
                fullWidth
                onChange={this.handleChange}
              />
              <Button
                sx={{ display: "block", mt: 2, width: "100%" }}
                variant="contained"
                type="submit"
                disabled={(optionOneText && optionTwoText) === ""}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default connect()(NewQuestion);
