const { Observable, interval } = require('rxjs')
const {filter, map} = require('rxjs/operators')



/* 
var interval$ = fromInterval(500)
var evenNos$ = filter(interval$, x => x % 2 == 0)
var mapToTens$ = map(evenNos$, no => no * 10)
const subscriber = mapToTens$.subscribe(val => console.log(val)) 
*/

/* 
var mapToTens$ = map(filter(fromInterval(500), x => x % 2 == 0), no => no * 10)
const subscriber = mapToTens$.subscribe(val => console.log(val)) 
*/

const obs$ = interval(500)
    .pipe(
        filter(val => val % 2 === 0),
        map(val => val * 10)
    )

const subscriber = obs$.subscribe(val => console.log(val))

setTimeout(() => {
    subscriber.unsubscribe()
}, 10000);