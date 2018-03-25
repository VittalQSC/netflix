import React, { Component } from 'react';
import styles from './Footer.css.js'
class Footer extends Component {
    render() {
        return (
            <div style={styles.footer}>
                <span style={styles.footerText} className="footerText">
                    Netflix roulette
                </span>
            </div>
        );
    }
}

export default Footer;
