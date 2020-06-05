import React, { Component } from 'react';
import styles from '../../css/BreadIngredients.module.css';
import BunTop from '../Functional/BunTop';
import Veggies from '../Functional/Veggies';

class Burger extends Component {
    render() {
        return (
            <div className={styles.burger}>
                <BunTop />
                <Veggies />
            </div>
        )
    }
}

export default Burger;