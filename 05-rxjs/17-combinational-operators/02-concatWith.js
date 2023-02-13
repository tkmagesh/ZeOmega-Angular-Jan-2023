const { from, Subject } = require('rxjs')
const { concatWith } = require('rxjs/operators')


const obs1$ = from(['a1', 'b1', 'c1'])
// obs2$ = from(['a2', 'b2', 'c2'])
const subject = new Subject()
const obs3$ = from(['a3', 'b3', 'c3'])

obs1$
    .pipe(
        concatWith(subject, obs3$)
    )
    .subscribe(console.log)

setTimeout(() => {
    subject.next('a2')
}, 500);

setTimeout(() => {
    subject.next('b2')
}, 1500);

setTimeout(() => {
    subject.next('c2')
}, 2500);

setTimeout(() => {
    subject.complete()
}, 4000);