//Make a function that takes a callback and calls it three times with different messages.
type messageFromCallbackFunction = (message: string) => void;

//the main function assignes a value to message, uses the callbackfunction to log the message and then re-assignes and repeats, twice
const messageFromCallback = (callbackFunction: messageFromCallbackFunction) => {
    let message: string = 'we start with message no 1';
    callbackFunction(message);
    message = 'now I am message no 2';
    callbackFunction(message);
    message = 'and now I am message no 3';
    callbackFunction(message);

};
//the callback function logs the variable message
const callbackFunction = (message: string): void => {
    console.log(message);
};

messageFromCallback(callbackFunction);