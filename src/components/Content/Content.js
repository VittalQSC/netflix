import React, { Component } from 'react';
// import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

const ContentHeaderRouter = () => (<div>
    <Route exact path="/" render={() => (
        <div>
            <span style={{ textAlign: "center" }}>movies found</span>
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
                    <ContentHeaderRouter />
                </ContentHeader>
                <ContentBody>
                    <ul>
                        {[1,1,1,1,1].map(v=><Film key={v4()}/>)}
                    </ul>
                </ContentBody>
            </div>
        );
    }
}

export default Content;
