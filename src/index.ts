import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next    : value => console.log('next:', value),
    error   : error => console.warn('error:', error),
    complete: () => console.log('complete')
};

const intervalos$ = new Observable<number>( subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => clearInterval(intervalID);

});

//const subs1 = intervalos$.subscribe(console.log);

/**
 * Subject tiene casteo múltiple
 * También es un Observer
 * Next, Error y Complete
 */
const subject$ = new Subject();