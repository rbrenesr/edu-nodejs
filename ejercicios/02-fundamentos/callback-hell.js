const empleados = [
    { id: 1, nombre: `Rafael` }, { id: 2, nombre: `Juan` }, { id: 3, nombre: `María` }
]

const salarios = [
    { id: 1, salario: 1000 }, { id: 2, salario: 1500 }
]



// const getEmpleado = (id) => {
//     const empleado = empleados.find((e) => { 
//         return e.id === id 
//     });    
//     return empleado;
// }

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)

    /*Si queremos solo regresar el nombre, con el ? podemos evaluar si existe el empleado
    para que no sea undefinied*/
    //const empleado = empleados.find(e => e.id === id)?.nombre

    if (empleado) {
        //callback(null, empleado);
        // Otra forma de retornar solo el nombre
        callback(null, empleado);
    } else {
        callback(`El empleado con el id ${id} no existe`);
    }
}


/*consulta del salario*/

//id del salario a consultar


/*Declaracion de la funcion de flecha para consultar el salario del arrglo*/
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)

    if (salario) {
        callback(null, salario.salario);
    } else {
        callback(`El salario para el empleado con id ${id} no existe`);
    }
}

//LLamado de la función getSalario con callback
/*getSalario(id, (err, salario) => {

    if (err) {
        console.log(`ERROR!`);
        console.log(err);
    }

    console.log(salario);
})
*/

//console.log(getEmpleado(5));
const id = 2;
getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(`ERROR!`);
    }

    getSalario(empleado.id, (err, salario) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(`El empleado:`, empleado, `tiene un salario de:`, salario);
    })

});