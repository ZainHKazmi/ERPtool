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
			      <div style={whiteStyle}>
			      {JSON.stringify(this.state.users)}
			      </div>
			 </div>

	 
	 	);
		    }
}

const background = {
	backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)',
	width: "100%",
	height: "600px",
	marginTop: "20px",
}
const whiteStyle = {
	backgroundColor: '#FFFFFF',
	padding: "10px 10px 10px 10px",
	marginTop: "20px",
	position: "relative",
}
export default Users;
