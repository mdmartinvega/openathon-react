import React, { Component } from 'react';
import { Header, Footer } from '../../components';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '../../containers';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App__root">
            <Header />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
