var inputfunc = require('../processinput');
var should = require('should');
var chai = require('chai'); 
var sinon=require('sinon');
var expect = require('chai').expect;
var assert = require('assert');



describe('Win Bet ', function() { 

  it('validate inputs for products value', function() {
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Bet:L:1:40");
    	assert(spy.calledWith('Invalid Input. possible values for betting product are P,W,E'));
    	spy.restore();
    });
   it('validate inputs for Selection value', function() {
  	 	
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Bet:P:x:40");
    	assert(spy.calledWith('Invalid input. Selections value should be numeric'));
    	spy.restore();
    });
   it('validate inputs for Stake value', function() {
  	 	
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Bet:P:1:x");
    	assert(spy.calledWith('Invalid input value. Stakes value should be numeric and greater than 0.'));
    	spy.restore();
    });
   it('validate inputs for Stake value', function() {
  	 	
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Bet:P:1:0");
    	assert(spy.calledWith('Invalid input value. Stakes value should be numeric and greater than 0.'));
    	spy.restore();
    });

});
describe('Result ', function() { 

  it('validate Result keyword in input', function() {
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Resut:6::4:7");
    	assert(spy.calledWith('Sorry, Invalid input'));
    	spy.restore();
    });
  it('validate winner selections in Result input', function() {
  	 	var spy = sinon.spy(console, 'log');
    	inputfunc.processingInput("Result:s::4:7");
    	assert(spy.calledWith('Invalid result input. Winner selections should be numeric and greater than 0.'));
    	spy.restore();
    });
 });