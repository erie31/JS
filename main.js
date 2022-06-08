const bochinchito = ["Chico", 500]
const bochinche = ["Grance", 600]
const bochincheXl =["Gigante",800]
const articulo = prompt ("Ingresa el articulo deseado")
let tiempo = prompt ("Ingresa la cantidad de dias de alquiler")
class Combo {
   constructor (articulo,precio,tiempo){
      this.articulo  = articulo.toUpperCase();
      this.precio  = parseFloat(precio);
      this.tiempo = parseFloat(tiempo)
  }
  costoAlquiler() {
      this.precio = this.precio * this.tiempo;
  }
}

   



const comboBochinche = [];
let   cantidad     = 4;

do{
   let entrada = prompt("Arma tu combo, un item a la vez");
   comboBochinche.push(entrada.toUpperCase());
   console.log(comboBochinche.length);
}while(comboBochinche.length != cantidad)

const nuevoCombo = comboBochinche.concat(["¡Consultar por Catering!","Envio sin cargo"]);

alert(nuevoCombo.join("\n"));