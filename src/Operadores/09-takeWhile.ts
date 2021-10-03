import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
       map(({x, y}) => ({x, y})),
       takeWhile(({y}) => y <= 150, true) // verdadero que se incluye el valor que finaliza el operador
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('completado')
    });