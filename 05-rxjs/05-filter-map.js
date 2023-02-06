const { Observable, interval } = require('rxjs')

function fromInterval(interval) {
    let obs$ = new Observable(subscriber => {
        let no = 0
        let timerId = setInterval(() => {
            subscriber.next(no++)
        }, interval);
        return () => {
            console.log('[fromInterval] unsubscribed!!')
            clearInterval(timerId)
        }
    })
    return obs$
}

function filterEven(src$) {
    let filteredObs$ = new Observable(subscriber => {
        const srcSubscription = src$.subscribe(val => {
            if (val % 2 === 0){
                subscriber.next(val)
            }
        })
        return () => {
            console.log('[filterEven] unsubscribed!!')
            srcSubscription.unsubscribe()
        }
    })
    return filteredObs$
}

function filter(src$, predicateFn) {
    let filteredObs$ = new Observable(subscriber => {
        const srcSubscription = src$.subscribe(val => {
            if (predicateFn(val)) {
                subscriber.next(val)
            }
        })
        return () => {
            console.log('[filter] unsubscribed!!')
            srcSubscription.unsubscribe()
        }
    })
    return filteredObs$
}

function map(src$, transformFn) {
    let mapObs$ = new Observable(subscriber => {
        const srcSubscription = src$.subscribe(val => {
            const transformedVal = transformFn(val)
            subscriber.next(transformedVal)
        })
        return () => {
            console.log('[map] unsubscribed!!')
            srcSubscription.unsubscribe()
        }
    })
    return mapObs$
}

var interval$ = fromInterval(500)
// var interval$ = interval(500)
// var evenNos$ = filterEven(interval$)
var evenNos$ = filter(interval$, x => x % 2 == 0)
var mapToTens$ = map(evenNos$, no => no * 10)
const subscriber = mapToTens$.subscribe(val => console.log(val))

setTimeout(() => {
    subscriber.unsubscribe()
}, 10000);