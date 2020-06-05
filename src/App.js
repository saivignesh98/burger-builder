import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { Component } from 'react';
import './App.css';
import Layout from './components/Functional/Layout';
import BurgerBuilder from './components/StateContainers/BurgerBuilder';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder/>
				</Layout>
			</div>
		)
	}
}

export default App;
