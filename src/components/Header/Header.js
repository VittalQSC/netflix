import React, { Component } from 'react';
import SearchBy from './../SearchBy/SearchBy';
import styles from "./Header.css"
class Header extends Component {
    render() {
        return (
            <div style={styles.header}>
                Netflix roulette
                <SearchBy/>
            </div>
        );
    }
}

export default Header;
