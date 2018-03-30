import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ContentHeader from './ContentHeader';
import ContentHeaderRouter from './ContentHeaderRouter';
import ContentBody from './ContentBody';
import FilmsListRouter from './../FilmsList/FilmsListRouter';
import styles from "./Content.css"

class Content extends Component {
    render() {
        return (
            <div className={this.props.className} style={styles.content}>
                <ContentHeader>
                    <ContentHeaderRouter films={this.props.films} />
                </ContentHeader>
                <ContentBody>
                    <FilmsListRouter films={this.props.films} sortBy={this.props.sortBy} />
                </ContentBody>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    films: state.films,
    sortBy: state.sortBy
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
