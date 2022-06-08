var inicio = 0; //se inicializa una variable en 0

function aumentar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

var cantidad = document.getElementById('cantidad'); //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
var valor = cantidad.value = ++inicio;
// if  ( valor > 0) {
  
//   cantidad.style.backgroundColor= "blue";

  
//   }

   if (valor > 20){
  
    cantidad.style.backgroundColor= "green";
    }

    else  {
  
        cantidad.style.backgroundColor= "white";
      
        
        }
}

function disminuir(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

var cantidad = document.getElementById('cantidad'); //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
var valor = cantidad.value = --inicio;

if (valor < 0){
  
  cantidad.style.backgroundColor= "red";
  }

  else  {

      cantidad.style.backgroundColor= "white";
    
      
      }

}

// style botones disminuir
document.getElementById("disminuir").style.borderColor = "white";
document.getElementById("disminuir").style.height= "40px";
document.getElementById("disminuir").style.width= "40px";

// style botones aumentar

document.getElementById("aumentar").style.borderColor = "white";
document.getElementById("aumentar").style.height= "40px";
document.getElementById("aumentar").style.width= "40px";

// style cantidad

document.getElementById("cantidad").style.borderColor = "white";
document.getElementById("cantidad").style.height= "40px";
document.getElementById("cantidad").style.width= "200px";