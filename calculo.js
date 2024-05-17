/*function calcularVelocidad() {
  const distancia = 10;
  const tiempo = 2;
  const velocidad = distancia / tiempo;
  console.log("La velocidad del movil es" + velocidad);
}

calcularVelocidad(22,3);
calcularVelocidad(40,1);
calcularVelocidad(13,2);

function calcularVelocidad(distancia, tiempo) {
  //const distancia = 10;
  //const tiempo = 2;
  const velocidad = distancia / tiempo;
  console.log("La velocidad del movil es " + velocidad);
}


calcularVelocidad(10,20);
calcularVelocidad(100,22);
calcularVelocidad(110,10); */

const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log ("La velocidad del movil es" + velocidad);
    return velocidad
}

const velocidad1= calcularVelocidad(22,12);
console.log ("La velocidad de Juana es " + velocidad1)

const velocidad2= calcularVelocidad(62,10);
console.log ("La velocidad de Juana es " + velocidad2)

const velocidad3= calcularVelocidad(21,43);
console.log ("La velocidad de Juana es " + velocidad3)