import React, { Component } from 'react';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <p className="Main">
              Main content
          </p>
      </div>
      );
  }
}

export default App;
