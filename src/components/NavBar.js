import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function NavBar({ avatarURL, userName, dispatch }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    dispatch(setAuthedUser(null));
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        to="/"
        exact
        component={NavLink}
        onClick={handleMobileMenuClose}
      >
        <p>Home</p>
      </MenuItem>
      <MenuItem to="/add" component={NavLink} onClick={handleMobileMenuClose}>
        <p>New Question</p>
      </MenuItem>
      <MenuItem
        to="/leaderboard"
        component={NavLink}
        onClick={handleMobileMenuClose}
      >
        <p>Leader Board</p>
      </MenuItem>
      <MenuItem onClick={handleLogOut}>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button to="/" exact component={NavLink} color="inherit">
                Home
              </Button>
              <Button to="/add" component={NavLink} color="inherit">
                New Question
              </Button>
              <Button to="/leaderboard" component={NavLink} color="inherit">
                Leader Board
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  lineHeight: 3,
                  ml: 3,
                }}
              >
                Hello, {userName}
              </Typography>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  ml: 3,
                  mr: 3,
                  display: { xs: "none", sm: "flex" },
                }}
                alt={`${userName}'s Avatar`}
                src={avatarURL}
              />
              <Button
                sx={{ display: { xs: "none", md: "flex" } }}
                color="inherit"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
function mapStateToProps({ authedUser, users }) {
  const currentUser = users[authedUser];
  return {
    userName: currentUser.name,
    avatarURL: currentUser.avatarURL,
  };
}

export default connect(mapStateToProps)(NavBar);
