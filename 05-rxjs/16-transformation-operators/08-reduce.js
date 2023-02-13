const { from } = require('rxjs');
const { reduce } = require('rxjs/operators');

// Static data source
const source = from([1, 2, 3, 4, 5]);

// Compute sum with reduce operator
const sumSubscription = source
    .pipe(reduce((acc, val) => acc + val))
    .subscribe(val => console.log('Sum:', val));

// The simulation
setTimeout(() => sumSubscription.unsubscribe());