const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const numbers$ = from([1, 2, 3, 4])

// Data pipeline for mapping numbers to their squares
numbers$.pipe(
    map(num => "Squared number: " + (num * num)))
    .subscribe(console.log)