import { of, from } from "rxjs";

/**
 * of --> toma argumentos y devuelve un stream
 * from --> array, promise, iterable, observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5]);
//const source$ = of(...[1,2,3,4,5]);
//const source$ = from('Saladino');
const source$ = from(fetch('https://api.github.com/users/saladinobelisario'));

source$.subscribe(observer);