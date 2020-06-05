import React, { Component } from 'react';
import styles from '../../css/BreadIngredients.module.css';
import BunTop from '../Functional/BunTop';

class Burger extends Component {
    render() {
        return (
            <div className={styles.burger}>
                <BunTop />
            </div>
        )
    }
}

export default Burger;