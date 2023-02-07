const { EventEmitter } = require('events')

const evtEmitter = new EventEmitter()

// publishers
function publisher1(){
    setInterval(() => {
        evtEmitter.emit('event-1', 'data-1')
    }, 500);
}

function publisher2() {
    setInterval(() => {
        evtEmitter.emit('event-2', 'data-2')
    }, 1000);
}

function publishEvents(){
    publisher1()
    publisher2()
}

//subscribers
function subscription1(data){
    console.log('[event-1] data : ', data)
}

function subscription2(data){
    console.log('[event-2] data : ', data)
}

function subscribeToEvents(){
    evtEmitter.on('event-1', subscription1)
    evtEmitter.on('event-2', subscription2)
}

//initiate the subscriptions
subscribeToEvents()

//initiate the publishers
publishEvents()

//unsubscribe after 5 seconds
setTimeout(() => {
    evtEmitter.off('event-1', subscription1)
    evtEmitter.off('event-2', subscription2)
}, 5000);
