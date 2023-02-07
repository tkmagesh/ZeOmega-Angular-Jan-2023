const { interval } = require('rxjs')

const obs$ = interval(500)
obs$.subscribe(console.log)