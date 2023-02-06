const { Observable, from } = require('rxjs')

function fromArray(arr){
    let obs$ = new Observable( subscriber => {
        for (let val of arr){
            subscriber.next(val)
        }
        subscriber.complete()
    })
    return obs$
}

// const arr$ = fromArray([10,20,30,40])
const arr$ = from([10,20,30,40])
arr$.subscribe(val => console.log(val))