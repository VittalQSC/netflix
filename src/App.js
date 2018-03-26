import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import HomeButton from './components/HomeButton/HomeButton';
import FilmDescription from './components/FilmDescription/FilmDescription';
import Content from './components/Content/Content';
import logo from './logo.svg';
import './App.css';

const HeaderRouter = () => {
  return (
    <div>
      <div>Netflix roulette</div>
      <Route exact path="/" render={() => (<Search></Search>)} />
      <Route exact path="/film/:filmId" render={() => (<div>
        <HomeButton />
        <FilmDescription />
      </div>)} />
    </div>
  );

}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app"> 
          <Header>
            <HeaderRouter/>
          </Header>
          <Content className="content"></Content>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
