const { Observable } = require('rxjs')

function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`)
    const p = new Promise(function (resolveFn, rejectFn) {
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returning result`)
            resolveFn(result)
        }, 4000);
    })
    return p;
}

// MyObservable = ?

function addAsyncObservable(x,y){
    const obs$ = new Observable(subscriber => {
        addAsyncPromise(x,y)
            .then(result => subscriber.next(result))
            .catch(err => subscriber.error(err))
    })
    return obs$
}


function addAsyncObsClient(x,y){
    const obs$ = addAsyncObservable(x,y)
    obs$.subscribe(result => console.log('[addAsyncObsClient] Result : ', result))
}

addAsyncObsClient(100,200)