const izq = document.getElementById('controlIzq');
const der = document.getElementById('controlDer');

const movil= document.getElementById('contenedorMovil');

const anchoPant = window.innerWidth;
let minPos;
if(anchoPant<=480){
	minPos=1;
}else{
	minPos=3;
}

let pos=minPos;

let elementos = document.querySelectorAll('.producto');

let desplazado = 0;

let step = elementos[0].offsetWidth;
const elemGap = document.querySelectorAll('.prodContent')[0] ;
let estilos = getComputedStyle(elemGap) ;
let gap = estilos.getPropertyValue('gap');
step+=parseInt(gap,10);

izq.addEventListener('click',function(){
	if(pos>minPos){
		desplazado+=step;
		pos--;
		movil.style.left = desplazado+'px';
	}
});

der.addEventListener('click',function(){
	if(pos<elementos.length){
		desplazado-=step;
		pos++
		movil.style.left = desplazado+'px';
	}
});