import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import fetchSimilar from './../../actions/fetchSimilar';
import v4 from 'uuid';
import Film from './../Film/Film';

class FilmsList extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        if (this.props.match.params.filmId) {
            console.log("componentDidMount ", this.props.searchBy)
            this.props.fetchSimilar(this.props.match.params.filmId, this.props.searchBy);
        }
    }
    
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.filmId !== newProps.match.params.filmId) {
            console.log("componentWillReceiveProps ", this.props.searchBy)
            this.props.fetchSimilar(this.props.match.params.filmId, this.props.searchBy);
        }
    }

    get comparator() {
        const toDate = (dateStr) => {
            return new Date(dateStr || new Date());
        };
        return (a, b) => (this.props.sortBy === "rating"
            ? b.vote_average - a.vote_average
            : toDate(b.release_date) - toDate(a.release_date)
        );
    }

    chainSort(films) {
        const sortedFilms = films.slice().sort(this.comparator);
        return sortedFilms;        
    }

    render() {
        return (<div>
            {
                this.chainSort(this.props.films)
                    .map(film => <Film {...film} key={v4()} />)

            }
        </div>)
    }
};

const mapStateToProps = state => ({
    searchBy: state.searchBy,
    sortBy: state.sortBy
});

const mapDispatchToProps = dispatch => ({
    fetchSimilar: (id, searchBy) => dispatch(fetchSimilar(id, searchBy))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmsList));
