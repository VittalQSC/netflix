import React, { Component } from 'react';
import styles from './ContentHeader.css';

class ContentHeader extends Component {
    render() {
        return (
            <header style={styles.header}>
                {this.props.children}
            </header>
        );
    }
}

export default ContentHeader;
