import React, {Component} from 'react';
import './App.css';

import { Route, Switch, BrowserRouter} from 'react-router-dom';

import Users from './Users';

class App extends Component {
	render(){
		return (
			<div>
			<BrowserRouter>
				<Switch>
				<Route exact path='/' component={Users}/>
				</Switch>
			</BrowserRouter>
			</div>
		)
	}


}

export default App;
