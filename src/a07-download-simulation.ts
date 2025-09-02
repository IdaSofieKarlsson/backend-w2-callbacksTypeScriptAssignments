//Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'.
type showFileFunction = (fileContent: string) => void;

const downloadFile = (url: string, showFile: showFileFunction) => {
    setTimeout(() => {
        const fileContent = `Downloaded data from ${url}`;
        showFile(fileContent);
    }, 2000);
};

//the callback function logs the filecontent
const showFile = (fileContent: string) => {
    console.log(fileContent);
};

downloadFile("http://exemple.com/file.txt", showFile);