import React, { Component } from 'react';
class App extends Component {
	  state = {
		      users: []
		    };
	/* 
	 *    This is where the magic happens
	 */
	 async componentDidMount() {
		try {
			            const res = await fetch('http://127.0.0.1:8000/users/');
			            const users = await res.json();
			            this.setState({
					            users
					          });
			          } catch (e) {
					        console.log(e);
					      }
		    }

	  render() {
		      return (
			            <div>
			      	     {JSON.stringify(this.state)}
			              {this.state.users.map(item => (
					                <div key={item.email}>
					                  <h1>{item.email}</h1>
					                  <span>{item.username}</span>
					                </div>
					              ))}
			            </div>
			          );
		    }
}

export default App;
