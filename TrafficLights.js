const awsIot = require('aws-iot-device-sdk');

const device = awsIot.device({
	certPath: './79b0fb78ca-certificate.pem.crt',
	keyPath: './79b0fb78ca-private.pem.key',
	caPath: './AmazonRootCA1.pem',
	clientId: 'smart-traffic-light_001',
	host: 'a3e9smmo06mnl8-ats.iot.us-east-1.amazonaws.com'
});

device.on('connect', function() {
	console.log ('connected');
});

device.on('error', (msg) => {
	console.log('error: ' + msg);
});

console.log(device);