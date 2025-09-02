//Make three functions that each wait 1 second and then call the next callback, 
// printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order.

type callbackFunction1Function = (data1: string) => void;
type callbackFunction2Function = (data2: string) => void;
type callbackFunction3Function = (data3: string) => void;

//main function
const chainedCallbacks = (callbackFunction1: callbackFunction1Function): void => {
    setTimeout(() => {
        const data1: string = 'Step 1 done';
        callbackFunction1(data1);
    }, 1000);
}; 

//callback function no 1, är också main function för callback 2 
const callbackFunction1 = (data1: string, callbackFunction2: callbackFunction2Function) => {
    console.log(data1);
    setTimeout(() => {
        const data2: string = 'Step 2 done';
        callbackFunction2(data2);
    }, 1000);
};

//callback function no 2, är också main function för callback 3 
const callbackFunction2 = (data2: string, callbackFunction3: callbackFunction3Function) => {
    console.log(data2);
    setTimeout(() => {
        const data3: string = 'Step 3 done';
        callbackFunction3(data3);
    }, 1000);
};

//callback function no 3 
const callbackFunction3 = (data3: string) => {
    console.log(data3);
};

//running main function
chainedCallbacks(callbackFunction1(data1));