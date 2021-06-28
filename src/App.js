import './App.css';
import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/counters'

class App extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </Fragment>
    );
  }
}

export default App;