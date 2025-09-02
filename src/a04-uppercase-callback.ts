//Write a function that takes a string and a callback. The callback should return the string in uppercase.

type convertToUppercaseFunction = (myString: string) => string;

const convertToUppercase = (myString: string, convertStringToUppercase: convertToUppercaseFunction) => {
    const upperString: string = convertStringToUppercase(myString);
    console.log(upperString);
};

const convertStringToUppercase = (myString: string): string => {
    return myString.toUpperCase();
};

convertToUppercase('we started as lowercase' , convertStringToUppercase);