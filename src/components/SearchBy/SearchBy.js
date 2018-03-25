import React, { Component } from 'react';
import styles from './SearchBy.css';

class SearchBy extends Component {
    constructor() {
        super();

        this.state = {
            selectedOption: 'title'
        }
    
        this.onChange = this.onChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    onChange(e) {
        this.setState({selectedOption:e.target.value});
    }

    isChecked(value) {
        return this.state.selectedOption === value;
    }

    render() {
        return (
            <div class="searchBy" style={styles.searchBy}>
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
                    <label style={styles.label(this.state.selectedOption === "title")} htmlFor="title">
                        TITLE 
                    </label>
                    <input style={styles.input} id="director" type="radio" name="gender" 
                        value="director" 
                        checked={this.isChecked("director")} 
                        onChange={this.onChange}></input>
                    <label style={styles.label(this.state.selectedOption === "director")} htmlFor="director">
                        DIRECTOR 
                    </label>
                            
                </form>
            </div>
        );
    }
}

export default SearchBy;
