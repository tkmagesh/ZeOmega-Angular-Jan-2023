(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        if (y == 0)
            throw new Error('invalid arguments')
        const result = x + y
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient

    function addAsync(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returning result`)
            callback(result)
        }, 4000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        addAsync(x, y, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient

    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 4000);
        })
        return p;
    }

    

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(x, y)
        p.then(function (result) {
            console.log(`[@client] result = ${result}`)
        })
    }

    function multiplyAsync(x,y, times){
        //call the addAsyncPromiseClient(x,y)
        //get the result (modify addAsyncPromiseClient function accordingly)
        //multiply by 'times'
        //return the result
    }

    function multiplyAsyncClient(x, y, times){
        //call the multiplyAsync
        //get the result
        //print the result
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient

    async function addAsyncPromiseClient2(x, y) {
        console.log(`[@client] invoking the service`)
        const result = await addAsyncPromise(x, y)
        console.log(`[@client] result = ${result}`)
        return result * 2
    }
    window['addAsyncPromiseClient2'] = addAsyncPromiseClient2
})()