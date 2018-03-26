import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './HomeButton.css';

const HomeButton = () => (
    <button style={styles.homeButton}>
        <Link to="/" style={styles.link}>
            <strong>
                SEARCH
            </strong>
        </Link>
    </button>
);

export default HomeButton;
