function sumar(num1, num2) {
  const resultado = num1 + num2;
  console.log("El resultado de la funcion es " + resultado);
  return resultado;
}
const primersuma = sumar(10, 20);
console.log(primersuma);
const segundasuma = sumar(20, 35);
console.log(segundasuma);
const tercerasuma = sumar(30, 20);
console.log(tercerasuma);

const sumatotal = primersuma + segundasuma + tercerasuma;
console.log("El resultado total es :" + sumatotal);

const imprimirResultado = (num1, num2, operacion) => {
  if (operacion === "sumar") {
    const sumar = num1 + num2;
    console.log("El resultado de la suma es:"+sumar);
    return sumar;
  } else if (operacion === "restar") {
    const restar = num1 - num2;
    console.log("El resultado de la resta es:" + restar);
    return restar;
  }
  
};
imprimirResultado(20, 25, "restar");
  imprimirResultado(30, 32, "sumar");

const imprimirNumero = (numero) => console.log(numero);

imprimirNumero(20);
imprimirNumero(100);
imprimirNumero(-200);

/*function sumar() {
    const resultado =10+20;
    console.log("El resultado de la funcion es " + resultado);
  }
  sumar();*/
