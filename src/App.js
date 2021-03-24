
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import MyAccount from './components/account/MyAccount'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
      display: 'flex',
      marginTop: 64
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router>
        <Header />
        <div className={classes.container}>
          <Sidebar />
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={MyAccount} />
        </div>
      </Router>
    </div>
  );
}

export default App;