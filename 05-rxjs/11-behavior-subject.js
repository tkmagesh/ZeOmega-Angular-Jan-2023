const { Observable, BehaviorSubject } = require('rxjs')

var intervalSubject = new BehaviorSubject('[Default value]')

function emitValuesByInterval(interval) {
        console.log('starting the observable')
        let no = 0
        setInterval(() => {
            intervalSubject.next(no++)
        }, interval);
}



console.log('Adding first subscriber')
const subscriber1 = intervalSubject.subscribe(val => console.log(`subscriber1 : ${val}`))
// const subscriber2 = intervalSubject.subscribe(val => console.log(`subscriber2 : ${val}`))

emitValuesByInterval(500)


let subscriber2
setTimeout(() => {
    console.log('Adding second subscriber')
    subscriber2 = intervalSubject.subscribe(val => console.log(`subscriber2 : ${val}`)) 
}, 2000);

setTimeout(() => {
    console.log('unsubscribing from observable')
    subscriber1.unsubscribe()
    subscriber2.unsubscribe()
}, 5000);