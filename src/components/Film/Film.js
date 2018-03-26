import React, { Component } from 'react';
import styles from './Film.css';

class Film extends Component {
    render() {
        return (
            <div style={styles.film}>
                <span style={styles.filmImg}></span>
                <div>center body</div>
                <div>genre</div>
            </div>
        );
    }
}

export default Film;
