//Ex:1
/* 

const { Subject, interval } = require('rxjs');
const { concatMap, filter } = require('rxjs/operators');

// A timer observable that emits every 1sec
const timer$ = interval(1000)

// The subject that will be used a switch
const switch$ = new Subject();

// Emit timer data only when the switch is on
const subscription = switch$.pipe(
    filter(toggle => toggle),
    concatMap(toggle => timer$)
).subscribe(time => console.log('ms passed: ' + time))


// Simulation
setTimeout(() => switch$.next(true), 1000);
setTimeout(() => switch$.next(false), 4000);
setTimeout(() => console.log('-------'), 5500);

setTimeout(() => switch$.next(true), 6000);

setTimeout(() => switch$.next(false), 7000);

setTimeout(() => subscription.unsubscribe(), 10000); 

*/

const { Subject } = require('rxjs');
const { concatMap, filter } = require('rxjs/operators');

// The subject that will be used to publish data events
const dataStream$ = new Subject()

// The subject that will be used as a switch
const switch$ = new Subject();

// Subscribe to inner observable using concatMap
const subscription = switch$.pipe(
    filter(toggle => toggle),
    concatMap(toggle => dataStream$)
).subscribe(time => console.log('data received: ' + time))

setTimeout(() => switch$.next(true), 1000);
setTimeout(() => dataStream$.next(1), 2000);
setTimeout(() => switch$.next(false), 4000);
setTimeout(() => dataStream$.next(2), 6000);

setTimeout(() => {
    dataStream$.next(3);
    dataStream$.complete()
}, 8000);

setTimeout(() => subscription.unsubscribe(), 10000);