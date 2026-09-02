// Selectores
///

// Functions
///

const div = document.querySelector('#section__div');

function obtener() {
    const url = 'https://api.jikan.moe/v4/anime';

    fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            console.log(data);
        });
};

export {obtener};