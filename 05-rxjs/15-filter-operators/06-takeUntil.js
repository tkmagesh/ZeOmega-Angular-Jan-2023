const { Subject, interval } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const pageNavigationSubject$ = new Subject()

const observable$ = interval(100)

observable$.pipe(
    takeUntil(pageNavigationSubject$)
).subscribe(() => console.log('100ms have passed'))

setTimeout(() => {
    pageNavigationSubject$.next('Navigating to next page')
    console.log('The user has navigated to another page!')
}, 1000)