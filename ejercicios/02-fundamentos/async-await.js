const empleados = [
    { id: 1, nombre: `Rafael` }, { id: 2, nombre: `Juan` }, { id: 3, nombre: `María` }
]

const salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 1500 }
]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);
        (empleado) ? resolve(empleado): reject(`No existe empleado id: ${ id } `);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        (salario) ? resolve(salario): reject(`No existe el salario: ${id}`);
    });
}

const id = 1;

// el async me convierte las fn en promesas
const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado.nombre} es de: ${salario.salario}`;

    } catch (err) {
        return err;
        //throw err;
    }
}

getInfoUsuario()
    .then(msj => console.log(msj))
    .catch(err => console.log(err));