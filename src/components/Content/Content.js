import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import SortBy from './../SortBy/SortBy';
import styles from "./Content.css"

class Content extends Component {
    render() {
        return (
            <div className={this.props.className} style={styles.content}>
                <ContentHeader>
                    <span style={{textAlign: "center"}}>movies found</span>
                    <SortBy style={styles.sortBy}/>
                </ContentHeader>
                Content
            </div>
        );
    }
}

export default Content;
