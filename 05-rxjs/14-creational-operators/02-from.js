const { from } = require('rxjs')

const obs$ = from([10,20,30,40])

obs$.subscribe(console.log)

//from promise
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

const addResult$ = from(addAsyncPromise(100,200))
addResult$.subscribe(result => console.log("Add Async Result : ", result))