function asyncAdd(x,y){
    console.log('asyncAdd started')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('[@asyncAdd] returning the result')
            resolve(x + y)
        },4000)
    })    
}

function asyncMultiply(x, y) {
    console.log('asyncMultiply started')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('[@asyncMultiply] returning the result')
            resolve(x * y)
        }, 4000)
    })
}

/*function asyncClient(x, y) {
    return asyncAdd(x, y)
        .then(addResult => {
            asyncMultiply(x, y)
                .then(multiplyResult => {
                    console.log(`addResult = ${addResult}, multiplyResult = ${multiplyResult}`)
                })
        })
}
 */
/* async function asyncClient(x,y) {
    const addResult = await asyncAdd(x,y)    
    const multiplyResult = await asyncMultiply(x,y)
    console.log(`addResult = ${addResult}, multiplyResult = ${multiplyResult}`)
} */

/* 
function asyncClient(x,y){
    const addPromise = asyncAdd(x, y)
    const multiplyPromise = asyncMultiply(x, y)
    Promise.all([addPromise, multiplyPromise])
        .then(results => {
            const [addResult, multiplyResult] = results
            console.log(`addResult = ${addResult}, multiplyResult = ${multiplyResult}`)
        })
} 
*/

async function asyncClient(x, y) {
    const addPromise = asyncAdd(x, y)
    const multiplyPromise = asyncMultiply(x, y)
    const[addResult, multiplyResult] = await Promise.all([addPromise, multiplyPromise])
    console.log(`addResult = ${addResult}, multiplyResult = ${multiplyResult}`)
}