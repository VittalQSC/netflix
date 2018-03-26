import React, { Component } from 'react';
import styles from './Film.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class Film extends Component {
    render() {
        return (
            <div style={styles.film} onClick={()=>{
                this.props.history.push('/film/1');
            }}>
                <span style={styles.filmImg}></span>
                <div>center body</div>
                <div>genre</div>
            </div>
        );
    }
}

export default withRouter(Film);
