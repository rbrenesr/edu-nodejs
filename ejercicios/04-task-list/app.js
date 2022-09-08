require('colors');
const { mostraMenu, pausa } = require('./helpers/mesajes');

const main = async() => {

    console.clear();
    let opt = '';

    do {
        opt = await mostraMenu();
        console.log({ opt });
        if (opt !== '0') await pausa();

    } while (opt !== '0')
}

main();