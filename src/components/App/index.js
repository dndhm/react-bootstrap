import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const App = ({ classes }) => (
  <h1 className={classes.heading}>App heading</h1>
);

export default injectSheet(styles)(App);
