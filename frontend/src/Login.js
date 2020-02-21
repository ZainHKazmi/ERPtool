import React, { Component } from 'react';
import { Header, Card, Button} from 'semantic-ui-react';

const axios = require('axios');

class Login extends Component {
			
	 render() {
		      return(
			 <div style={background}>
			      <h1> Login </h1>
			  <form style={loginForm}>
			      <ul>
			      <li style={formElement}><label>Username: <input type="text" name="username" /></label></li>
			      <li style={formElement}><label>Password: <input type="password" name="password"/></label></li>
			      <li style={formElement}><input type="submit" value="Submit"/></li>
			      </ul>
			 </form>
			 </div>

	 
	 	);
		    }
}

const background = {
	backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)',
	width: "100%",
	height: "100%",
	position: "fixed",
	display: "flex",
	justifyContent: "center",
}
const loginForm = {
	backgroundColor: '#FFFFFF',
	position: "fixed",
	height: "300px",
	width: "300px",
	marginTop: "200px",
}
const formElement = {
	listStyleType: "none",
	margin: "20px 20px 20px 20px",
}

export default Login;
