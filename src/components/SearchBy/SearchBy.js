import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSearchByOption} from './../../actions';
import styles from './SearchBy.css';

class SearchBy extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    onChange(e) {
        console.log(this.props.selectedOption)
        this.props.setOption(e.target.value);
    }

    isChecked(value) {
        return this.props.selectedOption === value;
    }

    render() {
        return (
            <div className="searchBy" style={styles.searchBy}>
                <title style={styles.title}>
                    <strong>
                    SEARCH BY: 
                    </strong>
                </title>
                <form style={styles.form}>
                    <input style={styles.input} id="title" type="radio" name="gender" 
                        value="title" 
                        checked={this.isChecked("title")} 
                        onChange={this.onChange}>
                    </input>
                    <label style={styles.label(this.props.selectedOption === "title")} htmlFor="title">
                        TITLE 
                    </label>
                    <input style={styles.input} id="tv" type="radio" name="gender" 
                        value="tv" 
                        checked={this.isChecked("tv")} 
                        onChange={this.onChange}></input>
                    <label style={styles.label(this.props.selectedOption === "tv")} htmlFor="tv">
                        TV 
                    </label>
                            
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedOption: state.searchBy
});

const mapDispatchToProps = dispatch => ({
    setOption: option => dispatch(setSearchByOption(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBy);
