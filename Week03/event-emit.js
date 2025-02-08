//To use library EventEmitter
const EventEmitter = require('events');
const myService = new EventEmitter();

//Make the event emitter for registration 
setImmediate(() => {
    myService.emit('registration', {
        name: "Suchada",
        email: "suchada@email.com"
    })
});

//To make the event listener
myService.on('registration', (userData) => {
    console.log(`Email sent to ${userData.name} address: ${userData.email}`);
});

//To make the event listener
myService.on('registration', (userData) => {
    console.log(`New member: ${userData.name}$`);
});
