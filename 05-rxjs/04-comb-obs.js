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
            console.log('[filterEven] unsubscribed!!')
            srcSubscription.unsubscribe()
        }
    })
    return filteredObs$
}

var interval$ = fromInterval(500)
// var interval$ = interval(500)
// var evenNos$ = filterEven(interval$)
var evenNos$ = filter(interval$, x => x % 2 == 0)
const subscriber = evenNos$.subscribe(val => console.log(val))

setTimeout(() => {
    subscriber.unsubscribe()
}, 10000);