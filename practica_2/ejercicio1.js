const persona = 
{
    nombre: "Ivan Isay",
    edda: 37,
    direccion:
    {
        ciudad: "Qro",
        país: "MX"    
    }
};
const { nombre, edad, direccion: { ciudad } } = persona;
console.log("Me llamo " + nombre + " tengo " + edad + " años y vivo en " + ciudad + ".");