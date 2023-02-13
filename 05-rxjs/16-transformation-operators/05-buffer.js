const { Subject } = require('rxjs');
const { buffer } = require('rxjs/operators');

// When this subject emits, the buffering will stop
const bufferStop$ = new Subject();

// The data source subject
const source$ = new Subject();

const subscription = source$
    .pipe(buffer(bufferStop$))
    .subscribe(val => console.log('buffered data:', val));

// The simulation
setTimeout(() => source$.next(1), 2000);
setTimeout(() => source$.next(2), 4000);
setTimeout(() => bufferStop$.next("stop"), 6000);
setTimeout(() => source$.next(3), 8000);
setTimeout(() => bufferStop$.next("stop"), 9000);
setTimeout(() => subscription.unsubscribe(), 10000);