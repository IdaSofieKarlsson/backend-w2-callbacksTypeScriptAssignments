//Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'.

type orderStatusFunction = (deliveryMessage: string) => void;

const orderPizza = (orderStatus: orderStatusFunction): void => {
    console.log('Ordering a Påarp Speciale.');
    setTimeout(() => {
        const deliveryMessage = 'Your pizza is ready!';
        orderStatus(deliveryMessage);
    }, 3000);
};

//the callback function logs the deliveryMessage, the status of the pizza order
const orderStatus = (deliveryMessage: string): void => {
    console.log(deliveryMessage);
};

orderPizza(orderStatus);
