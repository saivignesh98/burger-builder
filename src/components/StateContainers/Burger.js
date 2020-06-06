import React, { Component } from 'react';
import styles from '../../css/BreadIngredients.module.css';
import BunTop from '../Functional/BunTop';
import Veggies from '../Functional/Veggies';
import BunBottom from '../Functional/BunBottom';
import Meat from '../Functional/Meat';

class Burger extends Component {
    render() {
        return (
            <div className={styles.burger}>
                <BunTop />
                <Veggies />
                <Meat />
                <BunBottom />
            </div>
        )
    }
}

export default Burger;