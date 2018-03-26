import React, { Component } from 'react';
import styles from './FilmDescription.css';

class FilmDescription extends Component {
    render() {
        return (
            <div style={styles.filmDescription}>
                <div style={styles.filmImg}></div>
                <div style={styles.description}>
                    <header><h2 style={styles.h2}>Film header!</h2> <span style={styles.mark}>4.0</span> </header>
                    <div style={styles.metaInfo}>Wins!</div>
                    <div>
                        <strong style={styles.metric}>Year</strong>
                        <strong style={styles.metric}>Time</strong>
                    </div>
                    <div style={styles.innerFilmDescription}>Film descriotion</div>
                    <div style={styles.metaInfo}>Director: director</div>
                    <div style={styles.metaInfo}>Cast: Cast</div>
                </div>
            </div>
        );
    }
}

export default FilmDescription;
