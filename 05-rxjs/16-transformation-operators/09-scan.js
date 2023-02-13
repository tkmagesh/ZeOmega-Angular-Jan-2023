const { from } = require('rxjs');
const { scan, map } = require('rxjs/operators');

// Static data source
const source = from([1, 2, 3, 4, 5]);

// Compute sum with scan operator
const sumSubscription = source
    .pipe(scan(({count, sum, avg}, val) => ({ 
            count: count+1, sum : sum+val, avg : ((sum+val)/(count+1))
        }) , { count : 0, sum : 0, avg : 0 }),
        map(({avg}) => avg)
    )
    .subscribe(val => console.log('Avg:', val));

// The simulation
setTimeout(() => sumSubscription.unsubscribe());