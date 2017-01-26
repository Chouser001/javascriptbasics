function addNums() {
  numOne = document.getElementById('numOne').value;
  numTwo = document.getElementById('numTwo').value;
  result = parseInt(numOne) + parseInt(numTwo);
  document.getElementById('result').innerHTML = result;
}