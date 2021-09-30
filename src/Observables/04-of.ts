import {of} from 'rxjs';


// Good practice: specify the type
const obs$ = of<any>( [1,2], {a:3, b:5}, function(){}, true, Promise.resolve(true) );

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);