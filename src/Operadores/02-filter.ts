import { from, fromEvent, ObservableInput, range } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1,10).pipe(
//    filter(val => val % 2 === 1)
// ).subscribe(console.log);

range(1,10).pipe(
  filter( (val, index) => {
      console.log('index', index)
      return val % 2 === 1;
  })
)//.subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Jocker'
    }
];

from<ObservableInput<Personaje>>(personajes).pipe(
    filter( p => p.tipo === 'Heroe')
).subscribe(console.log);

// Encadenando operadores
const keyup$ = 
    fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code), //KeyBoardEvent, string
        filter(key => key ==='Enter')
    );


keyup$.subscribe(console.log);