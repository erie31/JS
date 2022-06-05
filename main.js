
const comboBochinche = [];
let   cantidad     = 4;

do{
   let entrada = prompt("Arma tu combo, un item a la vez");
   comboBochinche.push(entrada.toUpperCase());
   console.log(comboBochinche.length);
}while(comboBochinche.length != cantidad)

const nuevoCombo = comboBochinche.concat(["¡Consultar por Catering!","Envio sin cargo"]);

alert(nuevoCombo.join("\n"));