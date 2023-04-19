

const opcionesPrenda = ["source/remeraBlanca.jpg","source/buzoBlanco.jpg"];

const coloresRemeras = ["source/remeraAzul.png","source/remeraBlanca.png","source/remeraRoja.png","source/remeraMoztaza.png"];
const coloresBuzos  = ["source/buzoAzul.png","source/buzoBlanco.png","source/buzoRojo.png","source/buzoAmarillo.png"]
let imgDi = ["source/apple.png","source/apple2.png","source/c++.png","source/csharp.png","source/java.png","source/kalilinux.png","source/puntoNet.png","source/python1.png","source/react.png","source/ubuntu.png"];
const cRemera= ["azul","blanco","rojo","moztaza"];
const cBuzos= ["azul","blanco","rojo","amarillo"]
const prendaSel= document.querySelectorAll('.imgPrendaSel');

let prendaFinal= {
	url:"",
	color:"",
	estampado:""
}

let indiceTipoPrenda;

prendaSel.forEach(function(elem) {
  elem.addEventListener('click', function() {
    
    indiceTipoPrenda= elem.getAttribute('id');
    
    let seleccionada= document.querySelectorAll(".selected");
    if(seleccionada.length>0){
    	seleccionada[0].classList.remove("selected");
    }

    let s = document.getElementById(elem.getAttribute('id'));
    s.classList.add("selected");
    prendaFinal.url= opcionesPrenda[parseInt(elem.getAttribute('id'))];

  });
});

//FUNCIONES SLIDE

let sig = document.querySelectorAll('.btnSig');
let atras = document.querySelectorAll('.btnAtras')
const itemW = document.querySelectorAll('.itemFormW');
const wizSlider = document.querySelectorAll('.wizardSlider')
let step2 = itemW[0].offsetWidth;
step2+=10;
let pos2 = 0;
let coloresCreados= false;
let diseñosCreados= false;
sig.forEach(function(b){
	b.addEventListener('click',function(){
		if(pos2==0){
			pos2++;
			let aux = pos2*step2*(-1);
			wizSlider[0].style.left= aux+'px';

			if(!coloresCreados){
				let selectColor= document.getElementById('selectorDeColor');

				let columnas = [document.createElement('div'),document.createElement('div'),document.createElement('div'),document.createElement('div')]

				columnas.forEach(function(e){
					e.classList.add('c1','opcionesColores');
					e.style.height= '300px';
					
					selectColor.appendChild(e);
				});	
				coloresCreados=true;

				obtenerElementosCargados();
			}
			
			let col= document.querySelectorAll('.opcionesColores');
			if(indiceTipoPrenda==0){

				for(let i = 0 ; i<col.length;i++){

					col[i].style.backgroundImage = `url(${coloresRemeras[i]})`;
					col[i].setAttribute('id',i);
				}
			}else if(indiceTipoPrenda==1){
				for(let i = 0 ; i<col.length;i++){
					col[i].style.backgroundImage = `url(${coloresBuzos[i]})`;
					col[i].setAttribute('id',i);
				}
			}
			
		}else if(pos2==1){
			pos2++;
			let aux = pos2*step2*(-1);
			wizSlider[0].style.left= aux+'px';

			let di= document.getElementById('estampados');

			
			let elem;

			if(!diseñosCreados){
				for(let i = 0;i<imgDi.length;i++){
					elem= document.createElement('div');
					elem.classList.add('est');
					elem.setAttribute('id',i);			

					di.appendChild(elem);
				}
				diseñosCreados=true;
			}

			let eDi= document.querySelectorAll('.est');

			for(let i =0;i<eDi.length;i++){
				eDi[i].style.backgroundImage= `url(${imgDi[i]})`;
			}
			recuperarDiseños();

			
		}else if(pos2==2){
			pos2++;
			let aux = pos2*step2*(-1);
			wizSlider[0].style.left= aux+'px';


			let result = document.getElementById('resultado');

			let divres= document.createElement('div');
			divres.classList.add('est');

			divres.style.backgroundImage = `url(${prendaFinal.color}), url(${prendaFinal.estampado})`;
			divres.style.backgroundBlendMode = 'multiply';

			result.innerHTML= divres.outerHTML;

		}



	});
});

atras.forEach(function(e){
	e.addEventListener('click',function(){
		pos2--;
			let aux = pos2*step2*(-1);
			wizSlider[0].style.left= aux+'px';
	});
});




function obtenerElementosCargados(){
	let opcionesColor= document.querySelectorAll('.opcionesColores');
	opcionesColor.forEach(function(e){

		
		e.addEventListener('click',function(){
			opcionesColor.forEach(function(c){
				c.classList.remove('selected');
			})
			e.classList.add('selected');
			if(indiceTipoPrenda==0){
				prendaFinal.color= coloresRemeras[parseInt(e.getAttribute('id'))];
			}else{
				prendaFinal.color= coloresBuzos[parseInt(e.getAttribute('id'))];
			}
		})
	})
}


function recuperarDiseños(){
	let design= document.querySelectorAll('.est');

	design.forEach(function(s){
		s.addEventListener('click',function(){
			design.forEach(function(st){
				st.classList.remove('selected');
			})

			s.classList.add('selected');


			prendaFinal.estampado= imgDi[s.getAttribute('id')];



		})
	});
}