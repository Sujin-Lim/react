import React, { Component } from 'react';
import './App.css';

import Header from './header/header';

class App extends Component {
  state = 
  {headerMessage: '영화 소개 프로젝트'
  };

  render() {
    return (
      <div className="App">
        <Header headerMessage = {this.state.headerMessage} />
        <div>Main content</div>
      </div>
    );
  }
}

export default App;
