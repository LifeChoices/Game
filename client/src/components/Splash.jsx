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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Splash = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        container
        direction='row'
        justify='space-around'
        alignItems='center'
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>Game Explanation</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Game Logo</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Splash;
