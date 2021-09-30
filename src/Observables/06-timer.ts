import { interval, timer } from "rxjs";

const obsever = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('Inicio');
//interval$.subscribe(obsever);
timer$.subscribe(obsever);
console.log('Fin');