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
    marginTop: '8%',
    height: window.innerHeight * 0.9,
    flexGrow: 1,
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p> Portfolio Page </p>
    </div>
  );
};

export default Portfolio;
