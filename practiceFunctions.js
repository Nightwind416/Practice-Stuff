// Hello World
function helloWorld() {
	return 'Hello, World!'
}

// Addition
function add(x, y) {
	let num = x + y
	return num
	
}

// Subtraction
function subtract(x, y) {
	let num = x - y
	return num
	
}

// Add array
function sum(array) {
	let num = array.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue
	  }, 0)
	  return num
	
}

// Multiply array
function multiply(array) {
	let num = array.reduce(function (accumulator, currentValue) {
		return accumulator * currentValue
	  })
	  return num
}

// Power
function power(x, y) {
	num = Math.pow(x, y)
	return num
}

// Factorial
function factorial(x) {
	if(x == 0 || x == 1){
        return 1;
    }else{
        return x * factorial(x-1);
    }
}

// Sum between
function sumAll(firstNum, secNum) {
    console.log('\n firstNum: ' + firstNum + '\n secNum: ' + secNum);
    if (typeof firstNum === 'number' && typeof secNum === 'number') {
        if (firstNum < 0 || secNum < 0) {
            console.log('negative number, error');
            return 'ERROR';
        } else if (firstNum > secNum) {
            largeNum = firstNum;
            smallNum = secNum;
        } else {
            largeNum = secNum;
            smallNum = firstNum;
        }
        console.log('\n largeNum: ' + largeNum + '\n smallNum: ' + smallNum);
        sumNum = (largeNum-smallNum+1) * (smallNum+largeNum) / 2;
        console.log('sumNum: ' + sumNum);
        return sumNum;
    } else {
        console.log('not a number, error');
        return 'ERROR';
    }
}

// Temperature Conversion
// Ferenheit to Celcius
function ftoc(tempF) {
	console.log('\nOriginal tempF: ' + tempF);
	tempC = (tempF - 32) * (5 / 9);
	console.log('Converted to tempC: ' + tempC);
	tempC = Math.round(tempC * 10) / 10;
	console.log('Rounded tempC: ' + tempC);
	return tempC;
}
  
// Celsius to Ferenheit
function ctof(tempC) {
	console.log('\nOriginal tempC: ' + tempC);
	tempF = (tempC * (9 / 5)) + 32;
	console.log('Converted to tempF: ' + tempF)
	tempF = Math.round(tempF * 10) / 10;
	console.log('Rounded tempF: ' + tempF);
	return tempF;
}

// Repeat String
function repeatString(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let newString = ""
    let i = 0
    while (i < num) {
        newString += string
        i ++
    }
    console.log(newString)
    return newString
}

// Reverse String
function reverseString(inputString) {
    console.log('\ninputString: ' + inputString);
    let splitArray = inputString.split("");
    console.log('splitArray: ' + splitArray);
    let reversedArray = splitArray.reverse();
    console.log('reversedArray :' + reversedArray);
    let reversedString = reversedArray.join('');
    console.log('reversedString :' + reversedString);
    return reversedString;
}

// Palindrome check
function palindromes(inputString) {
    console.log('\ninputString: ' + inputString);
    lowerString = inputString.toLowerCase();
    inputPunc = lowerString.replace(/[\W_]/g, '');
    console.log('inputPunc: ' + inputPunc);
    splitArray = lowerString.split("");
    console.log('splitArray: ' + splitArray);
    reversedArray = splitArray.reverse();
    console.log('reversedArray :' + reversedArray);
    reversedString = reversedArray.join('');
    console.log('reversedString :' + reversedString);
    reversedPunc = reversedString.replace(/[\W_]/g, '');
    console.log('reversedPunc: ' + reversedPunc);

    if (lowerString.replace(/[\W_]/g, '') === reversedString.replace(/[\W_]/g, '')) {
        console.log('True: ' + inputString.replace(/[\W_]/g, '') + ' = ' + reversedString.replace(/[\W_]/g, ''));
        return true;
    } else {
        console.log('False: ' + inputString.replace(/[\W_]/g, '') + ' != ' + reversedString.replace(/[\W_]/g, ''));
        return false;
    }
}