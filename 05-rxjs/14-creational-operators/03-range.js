const { range } = require('rxjs')

const obs$ = range(1,10)
obs$.subscribe(console.log)