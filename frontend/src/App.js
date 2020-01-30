import React, { Component } from 'react';
const axios = require('axios');
class App extends Component {
	  state = {
		      users: {},
		    };
	/* 
	 *    This is where the magic happens
	 */
	 async componentDidMount() {
	 	axios.get('http://127.0.0.1:8000/users/').then(res=>{
			console.log(res.data);
			this.setState({users: res});
		});
	 }
	 render() {
		      return(
			<div>
			 {JSON.stringify(this.state)}
			</div>
	 
	 	);
		    }
}

export default App;
