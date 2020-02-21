import React, {Component} from 'react';
import './App.css';

import { Route, Switch, BrowserRouter} from 'react-router-dom';

import Users from './Users';
import Login from './Login';

class App extends Component {
	render(){
		return (
			<div>
			<BrowserRouter>
				<Switch>
				<Route exact path='/' component={Login}/>
				<Route exact path='/AllUsers' component={Users}/>
				</Switch>
			</BrowserRouter>
			</div>
		)
	}


}

export default App;
