import React, { Component } from 'react';

class FilmGetter extends Component {
    getFilmGenres() {
        return this.props.genres && this.props.genres
            .filter(genre => this.props.genre_ids.includes(genre.id))
            .map(filmGenre => filmGenre.name)
            .join(", ");
    }

    get imgSrc () {
        return this.props.poster_path && 'https://image.tmdb.org/t/p/w500' + this.props.poster_path;
    }

    get year() {
        return (new Date(this.props.release_date)).getFullYear() || "";
    }
}

export default FilmGetter;
