function addNums() {
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;
  result = parseInt(numOne) + parseInt(numTwo);
  document.getElementById('result').innerHTML = result;
}

function mulNums() {
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;
  result = parseInt(numOne) * parseInt(numTwo);
  document.getElementById('resultMul').innerHTML = result;
}

function divNums() {
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;
  result = parseInt(numOne) / parseInt(numTwo);
  document.getElementById('resultdivide').innerHTML = result;
}

function namechange(){
	firName = document.getElementById('firName').value;
	addText = ", you don't know anything!";
	result = firName + addText;
	document.getElementById('resultname').innerHTML = result;
}

map(function(index, elem) {
	return something;
})