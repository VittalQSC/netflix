import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="app"> 
        <Header></Header>
        <main class="content">Contens</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
