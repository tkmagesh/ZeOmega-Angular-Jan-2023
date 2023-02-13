const { from } = require('rxjs');
const { scan } = require('rxjs/operators');

// Static data source
const source = from([1, 2, 3, 4, 5]);

// Compute sum with scan operator
const sumSubscription = source
    .pipe(scan((acc, val) => acc + val))
    .subscribe(val => console.log('Sum:', val));

// The simulation
setTimeout(() => sumSubscription.unsubscribe());