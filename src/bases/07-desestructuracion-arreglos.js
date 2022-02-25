const personajes = ['Goku', 'Vegeta', 'Trunks']
const [, , p3] = personajes
console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

const usesState = (valor) => {
    return [valor, () => { console.log(`Hola ${valor} `) }]
}

const [nombre, setNombre] = usesState('Goku')
console.log(nombre)
setNombre(nombre)
    // arr[1]()