import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './SearchBy.css';

class SearchBy extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    onChange(e) {
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
                    <input style={styles.input} id="director" type="radio" name="gender" 
                        value="director" 
                        checked={this.isChecked("director")} 
                        onChange={this.onChange}></input>
                    <label style={styles.label(this.props.selectedOption === "director")} htmlFor="director">
                        DIRECTOR 
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
    setOption: option => dispatch({type: "SEARCH_BY", payload: option})
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBy);
