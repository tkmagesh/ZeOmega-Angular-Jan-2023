const { Subject, interval } = require('rxjs');
const { skipUntil } = require('rxjs/operators');

const pageNavigationSubject$ = new Subject()

const observable$ = interval(500)

observable$.pipe(
    skipUntil(pageNavigationSubject$)
).subscribe(() => console.log('500ms have passed'))

setTimeout(() => {
    pageNavigationSubject$.next('Start')
    console.log('The user has navigated to another page!')
}, 2000)