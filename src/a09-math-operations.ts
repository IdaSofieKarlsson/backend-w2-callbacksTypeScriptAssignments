//Write one function that can do addition, subtraction, multiplication, and division. 
// It should take two numbers, an operation string, and a callback.

type operationFunction = (a: number, b: number, operatorChoice: string) => number | undefined;

//main function takes in arguments, takes in result from callback function and logs the result
const fourMathAlternatives = (a: number, b: number, operatorChoice: string, operator: operationFunction) => {
    let result: number | undefined = operator(a, b, operatorChoice);
    console.log(result);
};

//the callback function takes choice of math operator as argument, peforms the calculation and returns the result. 
//the use of return means that break is not needed
const operator = (a: number, b: number, operatorChoice: string) => {
    switch (operatorChoice) {
        case 'addition':
            return a + b;
        case 'subtraction':
            return a - b;
        case 'multiplication':
            return a * b;
        case 'division': 
            return a / b;
        default: 
            console.log('error');
            break;
    };
};

//calling the main function
fourMathAlternatives(4, 5, 'addition', operator);
fourMathAlternatives(4, 5, 'subtraction', operator);
fourMathAlternatives(4, 5, 'multiplication', operator);
fourMathAlternatives(4, 5, 'division', operator);