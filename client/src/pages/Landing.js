import React, { Component } from "react";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";

import Ping from "./Ping";

const landinPageStyle = theme => ({
  landingContainer: {
    margin: theme.spacing.unit * 2
  }
});

class LandingPage extends Component {
  state = {
    welcomeMessage: ""
  };

  componentDidMount() {
    fetch("/welcome")
      .then(res => {
        console.log(res);
        if (res.status === 200) return res.json();
        else console.log("error", res);
      })
      .then(res => {
        this.setState({ welcomeMessage: res.welcomeMessage });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.landingContainer}>
        <Typography>{this.state.welcomeMessage}</Typography>
        <Link to="/ping"> go to the Ping page </Link>
        <Route path="/ping" component={Ping} />
      </div>
    );
  }
}

export default withStyles(landinPageStyle)(LandingPage);
