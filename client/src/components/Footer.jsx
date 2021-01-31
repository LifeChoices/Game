import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import { MenuIcon, AddIcon, SearchIcon, MoreIcon } from '@material-ui/icons';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  bottomFooter: {
    bottom: 0,
    flexGrow: 1,
    position: 'fixed',
    'background-color': '#3f51b5',
    width: '100%',
    left: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomFooter}>
      <p>Footer</p>
    </BottomNavigation>
  );
};

export default Footer;
