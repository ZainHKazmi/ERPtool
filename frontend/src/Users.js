import React, { Component } from 'react';
import { Header, Card, Button} from 'semantic-ui-react';

const axios = require('axios');

class Users extends Component {
	  state = {
		      users: {},
		    };
	 async componentDidMount() {
	 	axios.get('http://localhost:8000/users/').then(res=>{
			console.log(res.data);
			this.setState({users: res.data.results});
			
		});
	 }
	 render() {
		      return(
			<div style={background}>
			      <div style={whiteStyle}>
			      {JSON.stringify(this.state)}
			      </div>
			 </div>

	 
	 	);
		    }
}

const background = {
	backgroundImage: 'linear-gradient(to bottom right, #77a6f7, black)',
	width: "100%",
	height: "100%",
	position: "fixed",
}
const whiteStyle = {
	backgroundColor: '#FFFFFF',
	position: "fixed",
	marginTop: "200px",
}
export default Users;
