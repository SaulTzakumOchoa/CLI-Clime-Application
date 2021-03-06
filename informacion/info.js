const lugar = require('../lugar/lugar.js');
const clima = require('../clima/clima');

const getInfo = async (direccion) => {
    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch(e){
        return `No se pudo determinar el clina de ${direccion}`;
    }
}

module.exports = {
    getInfo,
}