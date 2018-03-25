import React, { Component } from 'react';
import styles from "./Header.css"
class Header extends Component {
    render() {
        return (
            <div style={styles.header}>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
