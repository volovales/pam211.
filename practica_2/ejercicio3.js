const personas = [
    { nombre: "luis", edad: 21 },
    { nombre: "pepito", edad: 12 },
    { nombre: "maria", edad: 15 }
];

const nombre = personas.find(persona => persona.nombre === "luis");
console.log(nombre);

personas.forEach(persona => {
    console.log(persona.nombre + " " + persona.edad);
});

const suma = personas
  .map(persona => persona.edad)
  .reduce((acumulador, edad) => acumulador + edad, 0);
console.log(suma);
