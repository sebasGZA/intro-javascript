import { getHeroeByID } from "../bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeByID(1);
//         resolve(heroe);
//         reject("No se pudo encontrar el héroe");
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log(`Then de la promesa`, heroe);
//     })
//     .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeByID(id);
            if (!heroe) {
                reject("No se pudo encontrar el héroe");
            } else {
                resolve(heroe);
            }
        }, 2000);
    });
};

getHeroeByIdAsync(4)
    .then(console.log)
    .catch((err) => console.warn(err));
//.then((heroe) => console.log("Héroe", heroe))
//.catch((err) => console.warn(err));