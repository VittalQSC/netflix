import React, { Component } from 'react';
import FilmGetter from './FilmGetter';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import styles from './Film.css';

class Film extends FilmGetter {
    constructor () {
        super();
        
    }

    render() {
        return (
            <div style={styles.film} onClick={()=>{
                this.props.history.push(`/film/${this.props.id}`);
            }}>
                <img style={styles.filmImg} src={this.imgSrc}></img>
                <div style={styles.title}>
                    {this.props.title}
                    <span style={styles.year}>{this.year}</span>
                </div>
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
