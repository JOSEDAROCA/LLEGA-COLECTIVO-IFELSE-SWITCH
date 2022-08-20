import "./styles.css";

let llegadaColectivo;
llegadaColectivo = prompt("Llego el colectivo? (Y/N): ").toUpperCase();

//LLEGA EL COLECTIVO? - CON IF Y ELSE IF
if (llegadaColectivo == "N") {
  console.log("Esperando el colectivo");
} else if (llegadaColectivo == "Y") {
  console.log("Llego el colectivo");
} else {
  console.log("Ingrese (Y/N)");
}

//LLEGA EL COLECTIVO? - CON SWWICH
switch (llegadaColectivo) {
  case "N":
    console.log("Esperando el colectivo");
    break;
  case "Y":
    console.log("Llego el colectivo");
    break;
  default:
    console.log("Ingrese (Y/N)");
}
