import React, { Component } from 'react';
import FilmDescriptionGetter from './FilmDescriptionGetter';
import fetchFilm from './../../actions/fetchFilm.js';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import styles from './FilmDescription.css';

class FilmDescription extends FilmDescriptionGetter {
    constructor () {
        super();
    }

    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.filmId, this.props.searchBy);
    }
    
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.filmId !== newProps.match.params.filmId) {
            this.props.fetchFilm(newProps.match.params.filmId, this.props.searchBy);
        }
    }

    render() {
        return (
            <div style={styles.filmDescription}>
                <img style={styles.filmImg} src={this.imgSrc}></img>
                <div style={styles.description}>
                    <header>
                        <h2 style={styles.h2}>{this.title}</h2> 
                        <span style={styles.mark}>{this.mark}</span> 
                    </header>
                    <div style={styles.metaInfo}>Voted: {this.wasVoted}</div>
                    <div>
                        <strong style={styles.metric}>{this.year}</strong>
                        <strong style={styles.metric}>{this.runtime}</strong>
                    </div>
                    <div style={styles.innerFilmDescription}>{this.description}</div>
                    {/* <div style={styles.metaInfo}>Director: director</div> */}
                    <div style={styles.metaInfo}>Genres: {this.genres}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filmDescription: state.filmDescription,
    searchBy: state.searchBy
});

const mapDispatchToProps = dispatch => ({
    fetchFilm: (id, searchBy) => dispatch(fetchFilm(id, searchBy))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDescription));
