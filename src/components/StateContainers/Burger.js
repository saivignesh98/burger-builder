import React, { Component } from 'react';
import styles from '../../css/BreadIngredients.module.css';
import BunTop from '../Functional/BunTop';
import BunBottom from '../Functional/BunBottom';
import Patty from '../Functional/Patty';
import Cheese from '../Functional/Cheese';
import Meat from '../Functional/Meat';
import Veggies from '../Functional/Veggies';

class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientsArray: [<BunTop key="0" />, <BunBottom key="1000" />]
        };
        this.addIngredients = this.addIngredients.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
    }
    componentDidMount() {
        this.addIngredients();
    }
    addIngredients() {
        this.props.ingredients.forEach(ingredient => this.addIngredient(ingredient))
    }
    addIngredient(ingredient) {
        let newIngredientsArray = this.state.ingredientsArray;
        const numberOfIngredients = newIngredientsArray.length;
        let oldKey = 0, newKey = 0;
        switch (ingredient) {
            case 'cheese':
                oldKey = newIngredientsArray[numberOfIngredients - 2].key;
                newKey = parseInt(oldKey, 10) + 1;
                newIngredientsArray.splice(newKey, 0, <Cheese key={newKey} />)
                break;
            case 'patty':
                oldKey = newIngredientsArray[numberOfIngredients - 2].key;
                newKey = parseInt(oldKey, 10) + 1;
                newIngredientsArray.splice(newKey, 0, <Patty key={newKey} />)
                break;
            case 'meat':
                oldKey = newIngredientsArray[numberOfIngredients - 2].key;
                newKey = parseInt(oldKey, 10) + 1;
                newIngredientsArray.splice(newKey, 0, <Meat key={newKey} />)
                break;
            case 'veggies':
                oldKey = newIngredientsArray[numberOfIngredients - 2].key;
                newKey = parseInt(oldKey, 10) + 1;
                newIngredientsArray.splice(newKey, 0, <Veggies key={newKey} />)
                break;
            default:
                break;
        }
        this.setState({
            ingredientsArray: newIngredientsArray
        });
    }
    render() {
        return (
            <div className={styles.burger}>
                {this.state.ingredientsArray}
            </div>
        )
    }
}

export default Burger;