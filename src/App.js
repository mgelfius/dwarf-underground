import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
         

    <main className="expanded row">
      <Stories />
      <Ad />
      <Footer />
    </main>
    </div>
      );
  }
}

export default App;
