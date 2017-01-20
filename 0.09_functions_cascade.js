// Ajax enables cascades like the following

// In a cascade, we can call many methods on the
// same object in sequence in a single statement.
// first example shows one line that calls and
 // combines several functions in a cascading manner
 // the example num2  would allow one to move a box and resize it in browser

var Calc = function(){    
  this.result=0;

  this.add = function(){      
    for(var x=0; x<arguments.length; x++){
      this.result += arguments[x];
    }     
    return this;
  };

  this.sub = function(){
    for(var x=0; x<arguments.length; x++){
      this.result -= arguments[x];
    }         
    return this;
  };

  this.mult = function(){
    if(this.result==0)this.result = 1;
    for(var x=0; x<arguments.length; x++){
      this.result *= arguments[x];
    }         
    return this;
  };

  this.div = function(){
    if(this.result==0) return this;
    for(var x=0; x<arguments.length; x++){
      this.result /= arguments[x];
    }         
    return this;
  };

  this.eq = function(){
    return this.result
  };

}

var cal1 = new Calc();

console.log(cal1.add(3).sub(1).add(2)); // Here result = 4;


console.log("--------------------------------------------");

// example num2

// id="myBoxDiv"

// In a cascade, we can call many methods on the
// same object in sequence in a single statement.
 // this example would allow one to move a box and resize it in browser

// getElement('myBoxDiv').
// move(350, 150).
// width(100).
// height(100).
// color('red').
// border('10px outset').
// padding('4px').
// appendText("Please stand by").

// on('mousedown', function (m) {
// this.startDrag(m, this.getNinth(m));
// }).
// on('mousemove', 'drag').
// on('mouseup', 'stopDrag').
// later(2000, function ( ) {
// this.
// color('yellow').
// setHTML("What hath God wraught?").
// slide(400, 40, 200, 200);
// }).
// tip('This box is resizeable');