import { heroes } from './data/heroes'

const getHeroeByID = (id) => heroes.find(heroe => heroe.id === id) || {}
    // return heroes.find(heroe => {
    //     if (heroe.id === id) {
    //         return true
    //     }
    //     return false
    // })

console.log(getHeroeByID(2))

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)

console.log(getHeroeByOwner('DCS'))