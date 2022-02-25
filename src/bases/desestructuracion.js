const persona = {
    nombre: 'Tony',
    edad: 26,
    clave: 'Ironman',
}

// const { nombre, edad, clave } = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const userContext = ({ nombre, edad, clave, rango = 'cualquier cosa' }) => {
    // console.log(nombre)
    // console.log(edad)
    // console.log(clave)
    // console.log(rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.4324,
            lng: -15.2435432
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = userContext(persona)
console.log(nombreClave, anios, lat, lng)