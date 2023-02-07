const { from } = require('rxjs');
const { last } = require('rxjs/operators');

const observable$ = from([1, 2, 3, 4, 5, 6])

// Example 1 - take last
observable$.pipe(
    last()
).subscribe(console.log)

// Example 1 - take last that passes the predicate, or default otherwise
observable$.pipe(
    last(val => val > 3, -1)
).subscribe(console.log)