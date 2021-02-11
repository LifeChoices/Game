import React from 'react';

import {
  makeStyles,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4%',
    height: window.innerHeight * 0.9,
    flexGrow: 1,
    backgroundColor: 'DarkSeaGreen',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: '4%',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        justify='space-evenly'
      >
        <Grid item xs={5}>
          <Paper className={classes.paper}>Possessions / Skills </Paper>
        </Grid>
        <Grid item xs={5}>
          <Grid>
            <Paper className={classes.paper}>Avatar Picture </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>Personal Information </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
