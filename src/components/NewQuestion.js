import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";

function NewQuestion(props) {
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

          <form>
            <TextField
              id="outlined-basic"
              label="Enter Option One Text Here"
              variant="outlined"
              fullWidth
            />
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              OR
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter Option Two Text Here"
              variant="outlined"
              fullWidth
            />
            <Button
              sx={{ display: "block", mt: 2, width: "100%" }}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
