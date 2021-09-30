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
const source$ = from(fetch('https://api.github.com/users/klerith'));

//source$.subscribe( async(resp) =>{
//    console.log(resp);
//    const dataResp = await resp.json();
//    console.log(dataResp);
//});

const generador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = generador();

//for(let id of iterable){
//    console.log(id);
//}

from(iterable).subscribe(observer);