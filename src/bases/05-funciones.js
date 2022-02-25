//Funciones en JS
// const saludar = function() {
//     return `Hola, ${}`
// }
const saludar2 = (nombre) => {
    return `hola ${nombre}`
}


const saludar3 = (nombre) => `hola ${nombre}`
const saludar4 = () => `hola mundo`


console.log(saludar2('Goku'))
console.log(saludar3('Vegeta'))
console.log(saludar4())

// return
const getUser = () => ({
    uid: 'ABC123',
    username: 'CualquierCosa'
})

const user = getUser()
console.log(user)

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Sebastian')
console.log(usuarioActivo)