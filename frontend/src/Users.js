import React, { Component } from 'react';

const axios = require('axios');

class Users extends Component {
	  state = {
		      users: [],
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
			      <form>
			      {this.state.users.map((user) => (
				<li style={whiteStyle}>
					<h1 style={{padding: "20px 20px 0px 20px"}}>{user.username}</h1>
				      	<p style= {{padding: "20px 20px 20px 20px"}}>{user.email}</p>
				</li>
			      
			      ))}
			      </form>
			</div>
	 
	 );
	 }
}


const background = {
	backgroundImage: "linear-gradient(to bottom right, #77a6f7, black)",
	width: "100%",
	minHeight: "900px",
	display: "flex",
	justify: "center",
}
const whiteStyle = {
	backgroundColor: '#FFFFFF',
	borderRadius: "10px",
	width: "300px",
	display: "inline-block",
	margin: "10px 10px 10px 10px",
}
export default Users;
