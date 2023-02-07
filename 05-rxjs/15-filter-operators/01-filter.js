const { from } = require('rxjs');
const { filter } = require('rxjs/operators');

const observable$ = from([1, 2, 3, 4, 5, 6])

observable$.pipe(
    filter(val => val % 2 == 0)
).subscribe(console.log)