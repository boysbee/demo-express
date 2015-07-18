'use strict';

var fizzbuzz = {
    getResult: function(input) {
    	if( input % 3 == 0 && input % 5 == 0) {
    		return "fizzbuzz"
    	}
    	if( input % 5 == 0) {
    		return "buzz";
    	}
    	if( input % 3 == 0) {
    		return "fizz";
    	}
    	
        return ""+input;
    }
};

describe('FizzBuzz', function(){
  it('return "1" when put 1', function(){
    fizzbuzz.getResult(1).should.equal("1");   
  });

  it('return "2" when put 2', function(){
    fizzbuzz.getResult(2).should.equal("2");   
  });

  it('return "fizz" when put 3', function(){
    fizzbuzz.getResult(3).should.equal("fizz");   
  });

  it('return "4" when put 4', function(){
    fizzbuzz.getResult(4).should.equal("4");   
  });

  it('return "buzz" when put 5', function(){
    fizzbuzz.getResult(5).should.equal("buzz");   
  });

  it('return "fizz" when put 6', function(){
  	fizzbuzz.getResult(6).should.equal("fizz");
  });

  it('return "7" when put 7', function(){
  	fizzbuzz.getResult(7).should.equal("7");
  });

  it('return "fizz" when put 9', function(){
  	fizzbuzz.getResult(9).should.equal("fizz");
  });

  it('return "buzz" when put 10', function(){
  	fizzbuzz.getResult(10).should.equal("buzz");
  });

  it('return "fizzbuzz" when devidable by 3 and 5', function(){
  	fizzbuzz.getResult(15).should.equal("fizzbuzz");
  });
});