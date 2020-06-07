import React, { Component } from 'react';
import Burger from '../StateContainers/Burger';
import PropTypes from 'prop-types';

class BurgerBuilder extends Component {
    render() {
        let ingredients = [];
        ingredients.PropTypes = {
            type: PropTypes.arrayOf(PropTypes.string)
        }
        return (
            <>
                <div>Burger</div>
                <Burger ingredients={ingredients} />
                <div>Build Controls</div>
            </>
        )
    }
}

export default BurgerBuilder;