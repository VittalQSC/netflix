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

const mapStateToProps = state => ({
    films: state.films
});

const mapDispatchToProps = dispatch => ({
    // search: (search) => dispatch(fetchFilms(search))
});


const ContentHeaderRouter = ({ films }) => (<div>
    <Route exact path="/" render={() => (
        <div>
            <span style={{ textAlign: "center" }}>{films.length > 0 && "movies found " + films.length}</span>
            <SortBy style={styles.sortBy} />
        </div>
    )}></Route>
    <Route path="/film/:filmId" render={() => (<div>Films by </div>)}></Route>
</div>);

class Content extends Component {
    render() {
        return (
            <div className={this.props.className} style={styles.content}>
                <ContentHeader>
                    <ContentHeaderRouter films={this.props.films} />
                </ContentHeader>
                <ContentBody>
                    <ul>
                        {
                            this.props.films.length > 0 ? this.props.films.map(v=><Film key={v4()}/>) 
                                                        : "No Films Found"
                        }
                    </ul>
                </ContentBody>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
