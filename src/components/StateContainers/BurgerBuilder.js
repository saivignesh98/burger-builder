import React, { Component } from 'react';
import Burger from '../StateContainers/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <div>Burger</div>
                <Burger />
                <div>Build Controls</div>
            </>
        )
    }
}

export default BurgerBuilder;