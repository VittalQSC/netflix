import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app"> 
        <Header>
          <div>Netflix roulette</div> 
          <Search></Search>
        </Header>
        <main className="content">Contens</main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
