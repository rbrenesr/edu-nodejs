const empleados = [
    { id: 1, nombre: `Rafael` }, { id: 2, nombre: `Juan` }, { id: 3, nombre: `María` }
]

const salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 1500 }
]


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);
        //if ternario
        (empleado) ? resolve(empleado): reject(`No existe empleado id: ${ id } `);


        //if normal
        /*if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe empleado od: ${ id } `);
        }
        */

    });
}


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        (salario) ? resolve(salario): reject(`No existe el salario: ${id}`);
    });
}



const id = 3;



// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => console.log(`1 El empleado: `, empleado.nombre, `tiene un salario de: `, salario.salario))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));





//Promesas en cadena
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado: `, nombre, `tiene un salario de: `, salario.salario))
    .catch(err => console.log(err))