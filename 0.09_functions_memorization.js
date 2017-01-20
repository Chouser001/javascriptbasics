// very intersting - TODO - more study on this subject

var fibonacci = function (n) {
return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
for (var i = 0; i <= 10; i += 1) {
// console.log('// ' + i + ': ' + fibonacci(i));
}
// 0: 0
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55


var fibonacci = function ( ) {
var memo = [0, 1];
var fib = function (n) {
var result = memo[n];
if (typeof result !== 'number') {
	result = fib(n - 1) + fib(n - 2);
memo[n] = result;
}
return result;
};
return fib;
}( );
// console.log('// ' + i + ': ' + fibonacci(i))

var memoizer = function (memo, fundamental) {
var shell = function (n) {
var result = memo[n];
if (typeof result !== 'number') {
result = fundamental(shell, n);
memo[n] = result;
}
return result;
};
return shell;
};
// console.log('// ' + i + ': ' + fibonacci(i))

var fibonacci = memoizer([0, 1], function (shell, n) {
return shell(n - 1) + shell(n - 2);
});
// console.log('// ' + i + ': ' + fibonacci(i))

var factorial = memoizer([1, 1], function (shell, n) {
return n * shell(n - 1);
});
console.log('// ' + i + ': ' + fibonacci(i))