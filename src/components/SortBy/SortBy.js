import React, { Component } from 'react';
import styles from './SortBy.css';

class SortBy extends Component {
    constructor() {
        super();

        this.state = {
            selectedOption: 'rating'
        }

        this.onChange = this.onChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    onChange(e) {
        this.setState({ selectedOption: e.target.value });
    }

    isChecked(value) {
        return this.state.selectedOption === value;
    }

    render() {
        return (
            <div style={Object.assign({}, this.props.style, styles.sortBy)}>
                <title style={styles.title}>
                    <strong>
                        Sort By:
                    </strong>
                </title>
                <form style={styles.form}>
                    <input style={styles.input} id="release_date" type="radio" name="gender"
                        value="release_date"
                        checked={this.isChecked("release_date")}
                        onChange={this.onChange}>
                    </input>
                    <label style={styles.label(this.state.selectedOption === "release_date")} htmlFor="release_date">
                        <strong>
                            release date
                        </strong>
                    </label>
                    <input style={styles.input} id="rating" type="radio" name="gender"
                        value="rating"
                        checked={this.isChecked("rating")}
                        onChange={this.onChange}></input>
                    <label style={styles.label(this.state.selectedOption === "rating")} htmlFor="rating">
                        <strong>
                            rating
                        </strong>
                    </label>

                </form>                
            </div>
        );
    }
}

export default SortBy;
