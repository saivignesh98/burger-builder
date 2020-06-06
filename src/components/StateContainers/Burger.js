import React, { Component } from 'react';
import styles from '../../css/BreadIngredients.module.css';
import BunTop from '../Functional/BunTop';
import BunBottom from '../Functional/BunBottom';

class Burger extends Component {
    render() {
        return (
            <div className={styles.burger}>
                <BunTop />
                <BunBottom />
            </div>
        )
    }
}

export default Burger;