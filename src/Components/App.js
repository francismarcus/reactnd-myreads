import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'

import Main from './Main';
import Search from './Search';

class App extends React.Component {
  render() {
    return (<div>
      <Route exact path="/" component={ Main }/>
      <Route exact path="/search" component={ Search }/>
    </div>);
  }
}

export default App;
