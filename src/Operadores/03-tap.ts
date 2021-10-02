import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

// Depurando con tap
numeros$.pipe(
    tap(x => console.log('antes', x)),
    map( val => val*10),
    tap({
        next: val => console.log('antes', val),
        complete: () => console.log('finalizado')
    })
).subscribe(val => console.log('subs', val))