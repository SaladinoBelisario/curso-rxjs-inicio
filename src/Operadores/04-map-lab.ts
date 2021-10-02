import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');

texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus pulvinar mauris mattis vestibulum. Nunc porta lacus vel mauris rutrum pulvinar. Suspendisse sit amet quam vel ligula mollis finibus vitae ut lacus. Vestibulum porttitor nec dolor vel fermentum. Duis iaculis sem nec iaculis ornare. Donec ut tristique velit. Sed sit amet malesuada orci. Nunc consequat fringilla massa id porttitor. Suspendisse ornare eu neque at aliquet. Sed quis lacus at risus vulputate imperdiet.
<br><br>
Nam iaculis in magna at scelerisque. Sed lorem neque, volutpat quis bibendum eget, vehicula aliquam dui. Mauris pharetra tellus sit amet turpis pellentesque egestas. Aliquam id ante sed elit pellentesque maximus a vitae est. Donec sit amet risus velit. Proin varius et turpis in lobortis. Pellentesque imperdiet ultricies enim, non varius tellus ullamcorper vehicula. Ut aliquam erat arcu, sit amet fermentum elit ultrices at. In hac habitasse platea dictumst. Vestibulum tellus dui, vehicula vel sapien id, euismod laoreet massa. Vivamus pharetra nulla non turpis pulvinar scelerisque. Donec aliquet felis id dapibus efficitur.
<br><br>
Phasellus quis sapien ac massa pellentesque ullamcorper eget sit amet turpis. Sed vel mauris in nunc commodo vestibulum. Vestibulum hendrerit tincidunt nulla, sit amet viverra nulla porttitor at. Etiam tempus, lorem accumsan accumsan cursus, nisl nulla consectetur mauris, ac pretium odio arcu in enim. Integer condimentum diam in lectus convallis pulvinar. Phasellus libero sapien, iaculis placerat porta egestas, semper in nibh. Ut ac rutrum purus.
<br><br>
Fusce ultrices nisi in neque consectetur scelerisque. Proin at lorem quis nisi finibus lacinia. Quisque ultrices nisi sem, eu dictum velit viverra at. Maecenas ac tellus risus. Mauris semper eget felis quis suscipit. Maecenas at neque non augue iaculis sollicitudin eu consectetur est. Quisque tincidunt condimentum dui at accumsan. Duis vel ultrices metus. Vivamus tempus maximus purus.
<br><br>
Donec arcu nulla, sollicitudin at ultricies a, convallis et dolor. Aenean scelerisque luctus tellus ac vestibulum. Aliquam tortor nunc, gravida ac aliquet nec, sodales ac ligula. Cras commodo dignissim leo eu consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget leo quam. Phasellus rhoncus dolor in dui blandit porta. Integer lacus lorem, gravida id augue a, euismod scelerisque ligula. Nullam eget felis justo. 
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que calcula
const calcularScroll = (event) => {
    const{
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calcularScroll),
    tap(console.log)
);

progress$.subscribe(
    porcentaje => {
        progressBar.style.width = `${porcentaje}%`;
    }
);