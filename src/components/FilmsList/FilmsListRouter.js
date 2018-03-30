import React, { Component } from 'react';
import FilmsList from './FilmsList';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class FilmsListRouter extends Component {
    render() {
        return (<div>
            <Route exact path="/" render={() => (
                <FilmsList films={this.props.films} sortBy={this.props.sortBy} />
            )}></Route>
            <Route path="/film/:filmId" render={() => (
                <FilmsList films={this.props.films} />
            )}></Route>
        </div>);
    }
}

export default FilmsListRouter;
