import React from 'react';
import './App.css';

class App extends React.Component {
	
	nowState = {
		text: "Smart Traffic Lights in Standby",
	}
	
	render () {
		return (
			<div className = "App">
				<header className = "App-header">
					<h1>
						Smart Traffic light
					</h1>
					
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
						<p>{this.nowState.text}</p>
					</div>
					
				</header>
			</div>
		)
	}
	
	getStart = () => 
	{
		fetch(`http://localhost:3005/start`) 
	}
	// functional
	
	getStatus = () => 
	{
		fetch(`http://localhost:3005/status`) 
			.then((response) => { response.text() })
			.then((data) => { 
				this.setState({
					text : data
				})
			})
	}
	//currently doent not update nowStatus
	
	getStop = () => 
	{
		fetch(`http://localhost:3005/stop`) 
	}
	//functional
	

}

export default App;