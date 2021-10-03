import { bufferTime, fromEvent, interval, skip, takeUntil, tap } from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Detener tiempo';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click')
    .pipe(
        tap(() => console.log('antes del skip')),
        skip(1),
        tap(() => console.log('depués del skip'))
    );

counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('completado')
    });