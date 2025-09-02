//Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'.

type sayHelloFunction = (data: string) => void;

const sayHelloLater = (sayHello: sayHelloFunction): void => {
    setTimeout(() => {
        const data: string = 'Hi, I am late!';
        sayHello(data);
    }, 2000);
};

//the callback function logs the string data
const sayHello = (data: string): void => {
    console.log(data);
};

sayHelloLater(sayHello);
