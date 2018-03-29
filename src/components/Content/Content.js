import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import v4 from 'uuid';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';
import SortBy from './../SortBy/SortBy';
import Film from './../Film/Film';
import styles from "./Content.css"

// fetch("https://api.themoviedb.org/3/search/movie?api_key=e1b5752947f72bf59d881b313cb84177&query=big&page=1").then((res) => {
//     //debugger;
//     console.log(res)
//     res.json().then(v => { debugger; })
// })



const ContentHeaderRouter = ({ films }) => (<div>
    <Route exact path="/" render={() => (
        <div>
            <span style={{ textAlign: "center" }}>{films.length > 0 && "movies found " + films.length}</span>
            <SortBy style={styles.sortBy} />
        </div>
    )}></Route>
    <Route path="/film/:filmId" render={() => (<div>Films by </div>)}></Route>
</div>);

const FilmsList = ({ films, sortBy }) => (<ul>
    {
        films.length > 0 
            ? (films => {
                const toDate = (dateStr) => (new Date(dateStr || new Date()))
                const comparator = (a, b) => (sortBy === "rating" 
                        ? b.vote_average - a.vote_average
                        : toDate(b.release_date) - toDate(a.release_date)
                );
                films.sort(comparator);
                return films;
              })(films).map(film => <Film {...film} key={v4()} />)
            : "No Films Found"
    }
</ul>);

class Content extends Component {
    render() {
        return (
            <div className={this.props.className} style={styles.content}>
                <ContentHeader>
                    <ContentHeaderRouter films={this.props.films} />
                </ContentHeader>
                <ContentBody>
                    <FilmsList films={this.props.films} sortBy={this.props.sortBy} />
                </ContentBody>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    films: state.films,
    sortBy: state.sortBy
});

const mapDispatchToProps = dispatch => ({
    // search: (search) => dispatch(fetchFilms(search))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
