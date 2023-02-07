const { from } = require('rxjs');
const { skip } = require('rxjs/operators');

const observable$ = from([1, 2, 3, 4, 5, 6])


observable$.pipe(
    skip(3)
).subscribe(console.log)

