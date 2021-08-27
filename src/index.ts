import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next    : value => console.log('next:', value),
    error   : error => console.log('error:', error),
    complete: () => console.log('complete')
};

const intervalo$ = new Observable<number>( subscriber =>{
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 3000);

    return () =>{
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription = intervalo$.subscribe( num => console.log('Num:', num));

setTimeout(() => {
    subscription.unsubscribe();
}, 3000);