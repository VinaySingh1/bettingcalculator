
var _ = require('lodash');
var inputfunc = require('../processinput');


module.exports.processInput=function(obj){
	
	obj.on('line', function(input){
		inputfunc.processingInput(input);
	});
}
