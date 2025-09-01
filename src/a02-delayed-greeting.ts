//Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'.

type sayHelloFunction = (data: string) => void;

const helloFromCallback = (sayHello: sayHelloFunction): void => {
    setTimeout(() => {
        const data: string = 'Hi, I am late!';
        sayHello(data);
    }, 2000);
};

const sayHello = (data: string): void => {
    console.log(data);
};

helloFromCallback(sayHello);
