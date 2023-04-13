const izq = document.getElementById('controlIzq'); //Obtenemos el boton con flecha hacia la izquierda
const der = document.getElementById('controlDer'); //obtenemos el boton con la flecha hacia la derecha
izq.style.opacity= '0.3'; //Cuando cargue la pagina no van a haber mas elementos hacia la izquierda por lo que le ponemos opacidad 0.3 como indicador
const movil= document.getElementById('contenedorMovil'); //obtenemos el contenedor de todos los elementos producto que se va a ir moviendo

const anchoPant = window.innerWidth; //obtengo el ancho de la pantalla
let minPos;
if(anchoPant<=480){
	minPos=1; //en el caso de la pantalla sea de movil se van a mostrar 1 producto a la vez
}else{
	minPos=3; //caso contrario, lo primero que se muestran son 3  elementos por lo que la pos empieza en 3 
}

let pos=minPos; 

let elementos = document.querySelectorAll('.producto'); //guardo todos los productos en la variable

let desplazado = 0; //inicialmente dezplado esta en 0 porque se encuentra en la pos 0 o sea desde el primer elemento

let step = elementos[0].offsetWidth; //aca definimos que distancia se va  a desplazar por cada vez que apretemos un control
const elemGap = document.querySelectorAll('.prodContent')[0] ; //obtenemos uno de los elementos, en este caso el primero
let estilos = getComputedStyle(elemGap) ; //obtengo los estilos que tiene, y devuelve un objeto
let gap = estilos.getPropertyValue('gap'); //obtengo el valor de la propiedad gap
step+=parseInt(gap,10); //convierto a entero la parte numerica del valor de gap y se la sumo al step, para tener en cuenta la separacion entre elementos

izq.addEventListener('click',function(){//capturamos el evento click del boton izquierdo
	if(pos>minPos){
		desplazado+=step; //en el caso de que no haya llegado al primer elemento se va a poder mover
		pos--;
		movil.style.left = desplazado+'px';
		der.style.opacity= '1';//se le devuelve la opacidad al boton contrario, porque si se pudo mover hacia la izquierda quiere decir queh hay elementos a la derecha
	}
	if(pos==minPos){
		izq.style.opacity= '0.3'; //si estamos ya en el primer elemento, se baja la opacidad del boton como indicador
	}
});

der.addEventListener('click',function(){//esto es lo mismo que el evento anterior pero con el otro boton
	if(pos<elementos.length){
		desplazado-=step;
		pos++
		movil.style.left = desplazado+'px';
		izq.style.opacity= '1';
	}
	if(pos==elementos.length){
		der.style.opacity= '0.3';
	}
});