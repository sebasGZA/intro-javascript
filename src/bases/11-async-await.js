// const getImagenPromesa = () =>
//     new Promise((resolve, reject) => resolve("https://dsadasdsa.com"));

// getImagenPromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKey = "5GuCR301cgCkOZFLLowHX8RaIRMx0QdO";
        const respuesta = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );

        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
};

getImagen();