import React, { Component } from 'react';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG"/>         
        <p className="Main">
              Main content
        </p>
      </div>
      );
  }
}

export default App;
