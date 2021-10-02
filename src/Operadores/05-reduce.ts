import { interval, reduce, take } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);

console.log('total', total);

interval(300)
    .pipe(
        take(30), 
        reduce(totalReducer)
    )
    .subscribe({ 
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });
