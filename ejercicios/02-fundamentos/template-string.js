const nombre = 'Rafael';
const apellido = 'Brenes';
const comp = nombre + ' ' + apellido;

const template = `Rafael Brenes`;
const template2 = `${1+1} Rafael brenes`;
const template3 = `${nombre}${apellido}`;
const html = `
<h1>Hola</h1>
<p>Hola</p>
`;

console.log(comp);
console.log(template);
console.log(template2);
console.log(template3);
console.log(template === template3);
console.log(html);