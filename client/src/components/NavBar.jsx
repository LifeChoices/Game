import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Portfolio from './Portfolio';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: window.innerHeight * 0.06,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    flexGrow: 1,
    position: 'fixed',
    'background-color': '#3f51b5',
    width: '100%',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.nav}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Life Choices
        </Typography>
        <Button color='inherit' path='/portfolio'>
          Portfolio
        </Button>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
