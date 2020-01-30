import React, { Component } from 'react';
import { Header, Card, Button} from 'semantic-ui-react';

const axios = require('axios');

class Users extends Component {
	  state = {
		      users: {},
		    };
	/* 
	 *    This is where the magic happens
	 */
	 async componentDidMount() {
	 	axios.get('http://127.0.0.1:8000/users/').then(res=>{
			console.log(res.data);
			this.setState({users: res.data.results});

		});
	 }
	 render() {
		      return(
			<div style={background}>
			 {JSON.stringify(this.state.users)}
			</div>
	 
	 	);
		    }
}

const background = {
	backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)',
}

export default Users;
