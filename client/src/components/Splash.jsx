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
import { blue } from '@material-ui/core/colors';
import BackGround from '../../assets/bgScene.mp4';
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '5%',
    height: window.innerHeight * 0.9,
    flexGrow: 1,
    backgroundImage: `url(${BackGround})`,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  video: {
    position: 'absolute',
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
          <Paper className={classes.paper}>
            <img
              src={`${Logo2}`}
              alt='Life Choices Logo'
              width='500'
              height='600'
            />
          </Paper>
        </Grid>
      </Grid>
      <video className={classes.video} controls play loop>
        <source src={`${BackGround}`} type='video/mp4' />
      </video>
    </div>
  );
};

export default Splash;
