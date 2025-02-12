import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';


const interval$ = interval(500);
const click$    = fromEvent( document, 'click' );

// Un Observable muestrea a otro

interval$
    .pipe(
        sample(click$)
    )
    .subscribe( console.log );




