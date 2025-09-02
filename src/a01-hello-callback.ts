//Write a function that takes a callback and calls it with 'Hello from callback!'.
type sayHelloFunction = (data: string) => void;

const helloFromCallback = (sayHello: sayHelloFunction): void => {
    const data: string = 'Hello from callback!';
    sayHello(data);
};

//the callback function logs the string data
const sayHello = (data: string): void => {
    console.log(data);
};

helloFromCallback(sayHello);
