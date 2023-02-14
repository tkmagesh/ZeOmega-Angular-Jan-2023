const { combineLatestWith, Subject } = require('rxjs');

const subject1 = new Subject();
const subject2 = new Subject();
const subject3 = new Subject();

/* 
combineLatest(subject1, subject2, subject3).subscribe(val => {
    console.log(val);
}) 
*/
subject1
    .pipe(
        combineLatestWith(subject2, subject3)
    )
    .subscribe(console.log)

setTimeout(() => {
    subject1.next(1);
}, 500)

setTimeout(() => {
    subject2.next(2);
}, 500)

setTimeout(() => {
    subject3.next(3);
}, 700)


setTimeout(() => {
    subject3.next('3 again');
}, 1200)