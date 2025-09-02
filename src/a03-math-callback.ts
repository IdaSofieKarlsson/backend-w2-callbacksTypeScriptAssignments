//Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback.
type printResultFunction = (result: number) => void;

const addNumbers = (a: number, b: number, printResult: printResultFunction) => {
    const result = a + b;
    printResult(result);
};

//the callback function logs the result. The calculations are done in the main function
const printResult = (result: number) => {
    console.log(`The result is: ${result}`);
};

addNumbers(47, 53, printResult);
