import React, { Component } from 'react';
import SortBy from './../SortBy/SortBy';
import { Route } from "react-router-dom";
import styles from "./Content.css"

const ContentHeaderRouter = ({ films }) => (<div>
    <Route exact path="/" render={() => (
        <div>
            <span style={{ textAlign: "center" }}>{films.length > 0 && "movies found " + films.length}</span>
            <SortBy style={styles.sortBy} />
        </div>
    )}></Route>
    <Route path="/film/:filmId" render={() => (<div>Similar Films: {films.length}</div>)}></Route>
</div>);

export default ContentHeaderRouter;
