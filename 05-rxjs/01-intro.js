var { Observable } = require('rxjs')

let obs$ = new Observable(subscriber => {
    console.log('sending values')
    subscriber.next(10)
    subscriber.next(20)
    subscriber.next(30)
    subscriber.next(40)
    // subscriber.error(new Error('invalid arguments'))
    subscriber.complete()
    return () => console.log('observable unsubscribed')
})

let subscription = obs$.subscribe({
    next : val => console.log(val),
    complete : () => console.log('All the values received'),
    error : err => console.log('Error :', err)
})

subscription.unsubscribe()


/* 
Write a function that creates an observable for the given array of values 
*/