const { Subject } = require('rxjs');
const { bufferCount } = require('rxjs/operators');

// The data source
const source$ = new Subject();

// Buffer every 3 events
const subscription = source$
    .pipe(bufferCount(3))
    .subscribe(val => console.log('buffered data:', val));

setTimeout(() => source$.next(1), 2000);
setTimeout(() => source$.next(2), 3000);
setTimeout(() => source$.next(3), 4000);

setTimeout(() => source$.next(4), 5000);
setTimeout(() => source$.next(5), 6000);
setTimeout(() => source$.next(6), 7000);

setTimeout(() => subscription.unsubscribe(), 10000);