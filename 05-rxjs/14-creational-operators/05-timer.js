const { timer } = require('rxjs')

const obs$ = timer(2000, 500)
obs$.subscribe(console.log)