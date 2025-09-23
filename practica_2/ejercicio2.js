const productos = 
[
    {
        nombre: "laptop",precio:12000
    },
    {
        nombre:"Mose",precio:250
    },
    {
        nombre:"Teclaso",precio:750
    },
    {
        nombre:"Monitor",precio:3000
    }
];
const carisimo_porcierto = productos.filter(productos => productos.precio > 1000).map(productos => productos.nombre);
console.log(carisimo_porcierto);

