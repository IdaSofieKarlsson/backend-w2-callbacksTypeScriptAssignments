//this is my own file with my lesson notes
type displayDataFunction = (data: string) => void;

const deliverPackage = (displayData: displayDataFunction): void => {
    console.log("Waiting for package...");
    setTimeout(() => {
        const data: string = 'Deliver package after 2 seconds';
        displayData(data);
    }, 2000);
};

const displayData = (data: string): void => {
    console.log(data);
};

deliverPackage(displayData);

 