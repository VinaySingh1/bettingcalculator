require('dotenv').config({path:'./config/.env'});
var readline = require('readline');
var utilfunctions = require('./utilfunctions');
var cli = require('./cli/');
var rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

utilfunctions.utilfunc.showUsuage();

cli.processInput(rl);