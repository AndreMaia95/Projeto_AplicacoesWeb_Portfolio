import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <Toolbar>
        <IconButton href="/">
          <img className="imgsize" src="images/logo.png" alt="logo"></img>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          André Maia
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button className="homebtn" color="inherit" href="/">
            Home
          </Button>
          <Button className="experiencebtn" color="inherit" href="/Experience">
            Experience
          </Button>
          <Button
            className="contactbtn"
            variant="outlined"
            color="inherit"
            href="/Contact"
          >
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
