const { defer, interval } = require('rxjs');

const deferredObs$ = defer(() => {
    console.log('subscription received')
    return interval(500)
})

let subscription;
setTimeout(() => {
    subscription = deferredObs$.subscribe(() => console.log('500ms have passed'))    
}, 2000);


setTimeout(() => {
    subscription.unsubscribe();
    console.log('4 second has passed');
}, 4000)