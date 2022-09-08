// setTimeout(function() {
//     console.log(`Hola mundo`);
// }, 1000);


// setTimeout(() => {
//    console.log(`Hola mundo`);
// }, 1000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: `Rafael`
    }

    setTimeout(() => {
        // console.log(usuario);
        callback(user);
        // callback();
    }, 1500);

};

getUsuarioById(10,


    (obj) => {
        console.log(obj.id);
        console.log(obj.nombre.toUpperCase());
    }


);