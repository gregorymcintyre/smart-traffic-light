import React from 'react';
import './App.css';

class App extends React.Component {
	
	nowState = {
		state : "Standby",
		numberOfCars : 0,
	}
	
	render () {
		return (
			<div className = "App">
				<header className = "App-header">
					<p>
						Smart Traffic light
					</p>
					
					<input type="button" 
						onClick={this.getStart} 
						value={'Start'}/>
						
					<input type="button" 
						onClick={this.getStatus} 
						value={'Status'}/>
						
					<input type="button" 
						onClick={this.getStop} 
						value={'Stop'}/>
						
					<div className="App-content"> 
						<p>{JSON.stringify(this.nowState.traffic)}</p>
					</div>
					
				</header>
			</div>
		)
	}
	
	getStart = () => 
	{
		fetch(`http://localhost:3005/start`) 
	}
	
	getStatus = () => 
	{
		fetch(`http://localhost:3005/status`) 
			.then(response => response.json()) 
			.then(data => { 
				this.setState({traffic:data}) 
			}) 
			.catch(error => { 
			})
	}
	
	getStop = () => 
	{
		fetch(`http://localhost:3005/stop`) 
	}
	

}

export default App;