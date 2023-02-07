const { from } = require('rxjs');
const { take } = require('rxjs/operators');

const observable$ = from([1, 2, 3, 4, 5, 6])


observable$.pipe(
    take(3)
).subscribe(console.log)

