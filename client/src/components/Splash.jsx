import React from "react";
import {
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import BackGround from "../../assets/bgScene.mp4";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5%",
    height: window.innerHeight * 0.9,
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "400px",
    height: "400px",
    backgroundColor: "gray",
  },
  paper2: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  video: {
    position: "fixed",
    top: "0%",
    left: "0%",
    marginTop: "4%",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  grid: {
    position: "fixed",
    marginTop: "5%",
  },
}));

const Splash = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video autoPlay loop muted className={classes.video}>
        <source src={BackGround} type="video/mp4" />
      </video>
      <Grid
        container
        spacing={0}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={3}>
          <Paper className={classes.paper2}>Game Explanation</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img
              src={`${Logo2}`}
              alt="Life Choices Logo"
              width="400px"
              height="400px"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Splash;
