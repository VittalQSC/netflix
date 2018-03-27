import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import styles from './Film.css';

class Film extends Component {
    constructor () {
        super();
        
    }

    getFilmGenres () {
        return this.props.genres && this.props.genres
        .filter(genre => this.props.genre_ids.includes(genre.id))
        .map(filmGenre => filmGenre.name)
        .join(", ");
    }

    render() {
        return (
            <div style={styles.film} onClick={()=>{
                this.props.history.push(`/film/${this.props.id}`);
            }}>
                <img style={styles.filmImg} src={
                    this.props.poster_path 
                    && 'https://image.tmdb.org/t/p/w500' + this.props.poster_path
                }>
                
                </img>
                <div style={styles.title}>{this.props.title}</div>
                <div style={styles.genre}>{
                    this.getFilmGenres()
                }</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genres
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Film));
