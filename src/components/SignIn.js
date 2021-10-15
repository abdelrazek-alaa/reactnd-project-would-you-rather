import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";

function SignIn(props) {
  const { users, usersIds, dispatch } = props;

  const [user, setUser] = React.useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      dispatch(setAuthedUser(user));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: 1,
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            borderBottom: 1,
            borderColor: "divider",
            p: 1,
          }}
        >
          <Typography component="h6" variant="subtitle2">
            Welcome to the Would You Rather App!
          </Typography>
          <Typography component="h6" variant="subtitle1">
            Please Sign in to continue
          </Typography>
        </Box>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "90%" }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Select User</InputLabel>
              <Select
                labelId="select"
                value={user}
                label="user"
                onChange={handleChange}
              >
                {usersIds.map((uid) => (
                  <MenuItem key={uid} value={uid}>
                    {users[uid].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={user === ""}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users),
    users,
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));
