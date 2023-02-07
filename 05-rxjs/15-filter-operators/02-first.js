const { from } = require('rxjs');
const { first } = require('rxjs/operators');

const observable$ = from([1, 2, 3, 4, 5, 6])

// Example 1 - take first
observable$.pipe(
    first()
).subscribe(console.log)

// Example 1 - take first that passes the predicate, or default otherwise
observable$.pipe(
    first(val => val > 6, -1)
).subscribe(console.log)