// Requiring module
const express = require("express");
var path = require('path');

const app = express();

function authentication(req, res, next) { //definicja funkcji uwierzytelniajacej 
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) { //sprawdzanie warunku i ew. informacja o bledzie
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1], //zmienne z danymi, przypisanie ich
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == 'student' && pass == 'tester') { //sprawdzanie poprawnosci danych

		// If Authorized user
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

//uwierzytelnienie klienta 
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public'))); 
//ustawienie serwera, port 3000
app.listen((3000), () => {
	console.log("Server is Running");
})