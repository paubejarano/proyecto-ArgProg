
let destacados  = [
{imagen: "source/pro1.jpg",desc: "Git Hub",precio: 2500},
{imagen: "source/pro2.jpg",desc: "Stack overflow",precio: 2500},
{imagen: "source/pro3.jpg",desc: "Senior",precio: 2500},
{imagen: "source/pro4.jpg",desc: "Rompiste algo",precio: 2500},
{imagen: "source/pro5.jpg",desc: "Linux",precio: 2500},
{imagen: "source/pro6.jpg",desc: "Python",precio: 2500}];

let slides = document.querySelectorAll('.slide');

window.addEventListener('load',function(){
	if(destacados.length>=slides.length){
		for(let i=0;i<slides.length;i++){

			let d= document.createElement('div');
			d.classList.add('imgDest');			
			d.style.backgroundImage = `url(${destacados[i].imagen})`;

			let dDesc= document.createElement('div');
			dDesc.classList.add('decDest')

			let titulo= document.createElement('div');
			titulo.classList.add('row1');
			titulo.innerHTML=`<h3> ${destacados[i].desc}</h3>`;
			let precio= document.createElement('div');
			precio.classList.add('row1');
			precio.innerHTML=`<h2>$ ${destacados[i].precio}</h2>`;


			dDesc.appendChild(titulo);
			dDesc.appendChild(precio);

			slides[i].appendChild(d);
			slides[i].appendChild(dDesc);

		}
	}else{
		alert("no hay suficientes imagenes");
	}
});


const izq = document.getElementById('ctrlIzq'); //Obtenemos el boton con flecha hacia la izquierda
const der = document.getElementById('ctrlDer'); //obtenemos el boton con la flecha hacia la derecha
//izq.style.opacity= '0.3'; //Cuando cargue la pagina no van a haber mas elementos hacia la izquierda por lo que le ponemos opacidad 0.3 como indicador
const movil= document.querySelectorAll('.sliderContent')[0]; //obtenemos el contenedor de todos los elementos producto que se va a ir moviendo

const anchoPant = window.innerWidth; //obtengo el ancho de la pantalla
let minPos;
if(anchoPant<=480){
	minPos=1; //en el caso de la pantalla sea de movil se van a mostrar 1 producto a la vez
}else if(anchoPant<=820){
	minPos=2; //caso contrario, lo primero que se muestran son 3  elementos por lo que la pos empieza en 3 
}else{
	minPos=3;
}

let pos=minPos; 

let elementos = document.querySelectorAll('.slide'); //guardo todos los productos en la variable

let desplazado = 0; //inicialmente dezplado esta en 0 porque se encuentra en la pos 0 o sea desde el primer elemento

let step = elementos[0].offsetWidth; //aca definimos que distancia se va  a desplazar por cada vez que apretemos un control
const elemGap = document.querySelectorAll('.sliderContent')[0] ; //obtenemos uno de los elementos, en este caso el primero
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