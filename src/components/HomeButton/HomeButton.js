import React from 'react';
import { connect } from 'react-redux';
import { clear } from './../../actions/';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './HomeButton.css';

const HomeButton = ({ clear }) => (
    <button style={styles.homeButton} onClick={clear}>
        <Link to="/" style={styles.link}>
            <strong>
                SEARCH
            </strong>
        </Link>
    </button>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    clear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
