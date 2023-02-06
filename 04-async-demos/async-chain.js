//sync
/* function addSync(x, y) {
    console.log(`   [@addSync] processing ${x} and ${y}`)
    if (y == 0)
        throw new Error('invalid arguments')
    const result = x + y
    console.log(`   [@addSync] returning result`)
    return result
}

function addSyncClient(x, y) {
    console.log(`[@addSyncClient] invoking the service`)
    const result = addSync(x, y)
    console.log(`[@addSyncClient] result = ${result}`)
    return result
}

function multiplySync(x,y, times){
    console.log(`[@multiplySync] invoking the service`)
    const addResult = addSyncClient(x,y)
    const multiplyResult = addResult * times
    console.log(`[@multiplySync] result = ${multiplyResult}`)
    return multiplyResult
}

function multiplySyncClient(x,y,times){
    console.log(`[@multiplySyncClient] invoking the service`)
    const finalResult = multiplySync(x,y,times)
    console.log("[@multiplySyncClient] final Result ", finalResult)
}
 */

//async (step-1)
/* function addAsync(x, y) {
    console.log(`   [@addAsync] processing ${x} and ${y}`)
    const addPromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            const result = x + y
            console.log(`   [@addAsync] returning result`)
            resolve(result)
        }, 4000);
    })
    return addPromise
}

function addAsyncClient(x, y) {
    console.log(`[@addAsyncClient] invoking the service`)
    const addClientPromise = new Promise((resolve, reject) => {
        const addPromise = addAsync(x, y)
        addPromise.then((result) => {
            console.log(`[@addAsyncClient] result = ${result}`)
            resolve(result)
        })
    })
    return addClientPromise
}

function multiplyAsync(x, y, times) {
    console.log(`[@multiplyAsync] invoking the service`)
    const multiplyAsyncPromise = new Promise((resolve, reject) => {
        const addClientPromise = addAsyncClient(x, y)
        addClientPromise.then((addResult) => {
            const multiplyResult = addResult * times
            console.log(`[@multiplyAsync] result = ${multiplyResult}`)
            resolve(multiplyResult)
        })
    })
    return multiplyAsyncPromise
}

function multiplyAsyncClient(x, y, times) {
    console.log(`[@multiplyAsyncClient] invoking the service`)
    const multiplyAsyncPromise = multiplyAsync(x, y, times)
    multiplyAsyncPromise.then((finalResult) => {
        console.log("[@multiplyAsyncClient] final Result ", finalResult)
    })
} */

//async (step-2)
function addAsync(x, y) {
    console.log(`   [@addAsync] processing ${x} and ${y}`)
    const addPromise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            const result = x + y
            console.log(`   [@addAsync] returning result`)
            resolve(result)
        }, 4000);
    })
    return addPromise
}

function addAsyncClient(x, y) {
    console.log(`[@addAsyncClient] invoking the service`)
    const addPromise = addAsync(x, y)
    const addClientPromise = addPromise.then((result) => {
        console.log(`[@addAsyncClient] result = ${result}`)
        return result
    })
    return addClientPromise
}

function multiplyAsync(x, y, times) {
    console.log(`[@multiplyAsync] invoking the service`)
    const addClientPromise = addAsyncClient(x, y)
    const multiplyAsyncPromise = addClientPromise.then((addResult) => {
        const multiplyResultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const multiplyResult = addResult * times
                console.log(`[@multiplyAsync] result = ${multiplyResult}`)
                resolve(multiplyResult)
            },4000)
        })
        return multiplyResultPromise
    })
    return multiplyAsyncPromise
}

function multiplyAsyncClient(x, y, times) {
    console.log(`[@multiplyAsyncClient] invoking the service`)
    const multiplyAsyncPromise = multiplyAsync(x, y, times)
    multiplyAsyncPromise.then((finalResult) => {
        console.log("[@multiplyAsyncClient] final Result ", finalResult)
    })
}

