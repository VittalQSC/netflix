import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Content from './components/Content/Content';
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
        <Content className="content"></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
