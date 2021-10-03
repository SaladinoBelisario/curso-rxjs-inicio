import { first, fromEvent, tap } from "rxjs";

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$
    .pipe(
        tap(() => console.log('tap')),
        first<MouseEvent>(event => event.clientY >= 150)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('completado')
    });
