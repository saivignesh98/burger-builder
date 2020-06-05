import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from 'reactstrap';
import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<p>Test to see if layout works</p>
				</Layout>
			</div>
		)
	}
}

export default App;
