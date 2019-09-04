var express = require("express");
var tarfficLight = require('./TrafficLights.js');

const app = express();

app.get('/start', (req, res) => { 
	tarfficLight.startSimulation(); 
	return res.send('Simulation is started'); 
}); 

app.get('/stop', (req, res) => { 
	tarfficLight.stopSimulation(); 
	return res.send('Simulation is terminated'); 
}); 

app.get('/state', (req, res) => { 
	return res.send(JSON.stringify(tarfficLight.state)); 
}); 

app.listen(3005, () => 
	console.log('Example app listening on port 3005!'), 
);