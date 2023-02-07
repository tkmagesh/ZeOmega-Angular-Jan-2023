const { of } = require('rxjs')

const obs$ = of([10,20,30,40])

obs$.subscribe(console.log)