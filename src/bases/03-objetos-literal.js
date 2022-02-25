const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direcicon: {
        ciudad: 'New York',
        zip: 13465432,
        lat: 14.21354,
        lng: 34.324324
    }
};

// console.table(persona);

const persona2 = {...persona };
persona2.nombre = 'Peter'


console.log(persona);
console.log(persona2);