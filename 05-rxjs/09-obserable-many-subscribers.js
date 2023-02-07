const { Observable, interval } = require('rxjs')

function fromInterval(interval) {
    let obs$ = new Observable(subscriber => {
        console.log('starting the observable')
        let no = 0
        let timerId = setInterval(() => {
            subscriber.next(no++)
        }, interval);
        return () => {
            console.log('unsubscribed!!')
            clearInterval(timerId)
        }
    })
    return obs$
}

var interval$ = fromInterval(500)

console.log('Adding first subscriber')
const subscriber1 = interval$.subscribe(val => console.log(`subscriber1 : ${val}`))

let subscriber2
setTimeout(() => {
    console.log('Adding second subscriber')
    subscriber2 = interval$.subscribe(val => console.log(`subscriber2 : ${val}`)) 
}, 2000);

setTimeout(() => {
    console.log('unsubscribing from observable')
    subscriber1.unsubscribe()
    subscriber2.unsubscribe()
}, 5000);