//Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call.


const randomMessage = () => {
    const randomNumber: number = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        successMessage();
    } else if (randomNumber === 1) {
        errorMessage();
    } else {
        console.log("The function didn't work.");
    };
};

//the callback functions does not have parametres, as they only print a message
//callback function for success message
const successMessage = () => {
    console.log('We have succeded, yet again!!!!!!!!!!!!!');
};

//callback function for error message
const errorMessage = () => {
    console.log("Well, THAT didn't go well... massive errors here.");
};

randomMessage();