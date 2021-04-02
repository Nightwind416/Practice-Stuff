let msg = 'Hello World';
console.log(msg);

const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'input',
    message: 'Please enter the number you would like to FizzBuzz up to'
  });

  console.log(response.input);
  FizzBuzz(response.input)
})();



function FizzBuzz(num) {
    console.log("Begin!");
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
console.log("Done!");
}