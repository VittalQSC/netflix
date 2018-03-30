import React, { Component } from 'react';
export default class FilmDescriptionGetter extends Component {
    constructor(props) {
        super(props);

    }

    get year() {
        return (new Date(this.props.filmDescription.release_date)).getFullYear() || "";
    }

    get description() {
        return this.props.filmDescription.overview;
    }

    get mark() {
        return this.props.filmDescription.vote_average;
    }

    get title() {
        return this.props.filmDescription.title;
    }

    get imgSrc() {
        return this.props.filmDescription.poster_path
            && 'https://image.tmdb.org/t/p/w500' + this.props.filmDescription.poster_path;
    }

    get runtime() {
        return this.props.filmDescription.runtime + " m";
    }

    get genres() {
        return this.props.filmDescription.genres
            ? this.props.filmDescription.genres.map(g => g.name).join(", ")
            : [];
    }

    get wasVoted() {
        return this.props.filmDescription.vote_count;
    }
}