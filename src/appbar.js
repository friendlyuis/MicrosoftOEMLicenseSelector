import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

export default class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            style={{ display: "flex", flex: 1 }}
          >
            Microsoft OEM License Selector
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
