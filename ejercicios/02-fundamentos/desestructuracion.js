//Declaracion de un objeto persona

const persona = {
    nombre: 'Rafael',
    apellido: 'Brenes',
    edad: 35,
    getNombre() {
        return `
        ${this.nombre}
        ${this.apellido}
        ${this.edad}`;
    }
}

/* Imprimier el metodo del objeto
console.log(persona.getNombre());*/


/*Obtener las propiedades de la persona
  const nombre = persona.nombre;
  const apellido = persona.apellido;
  const edad = persona.edad;
 const { nombre, apellido, poder = `sin poder` } = persona;*/


/*desestructuracion de objetos
function imprimirHeroe(heroe) {
    const { nombre, apellido, poder = `sin poder`, edad = 0 } = heroe;
    console.log(nombre, apellido, edad);
}
imprimirHeroe(persona);*/

/*desestructuracion de objetos en la declaracion de atributos de entrada
function imprimirHeroe({ nombre, apellido, poder = `sin poder`, edad = 0 }) {
    console.log(nombre, apellido, edad);
}
imprimirHeroe(persona);*/

/*desestructuracion de un arreglo "array"
 const heroes = [`Deadpool`, `Superman`, `Batman`];
 const [h1, h2, h3] = heroes;
 console.log(h1, h2, h3);

const heroes = [`Deadpool`, `Superman`, `Batman`];
const [, , h3] = heroes;
console.log(h3);*/