import React, { Component } from 'react';
import SearchBy from './../SearchBy/SearchBy';
import styles from "./Search.css";
class Search extends Component {
    constructor() {
        super();
        this.state = { value: '' };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        alert(this.state.value);
        // this.setState({ value: '' });
    }

    render() {
        return (
            <div style={styles.search}>
                <header style={styles.header}>FIND YOUR MOVIE</header>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Search.." name="search" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        style={styles.input}
                    ></input>
                    <button type="submit" style={styles.button}>
                        <i className="fa fa-search">SEARCH</i>
                    </button>
                </form>
                <SearchBy></SearchBy>
            </div>
        );
    }
}

export default Search;
