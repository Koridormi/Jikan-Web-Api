// Selectors
const sectionDiv = document.querySelector('#section__div');

// Functions
function obtenerDatos() {
    const url = 'https://api.jikan.moe/v4/seasons/now';

    fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            const animes = data.data;

            for (const anime of animes) {
                crearCard(anime.title, anime.images.jpg.large_image_url, anime.score, anime.episodes);
            };
        })
        .then( () => {
            const loading = document.querySelector('.loadingCard');
            loading.remove();
        })
        .catch( () => {
            const loading = document.querySelector('.loadingCard');
            loading.textContent = 'Error al Cargar los Datos';
        });
};

// Render
function crearCard(title, src, rating, episodes) {
    const animeCard = document.createElement('DIV');
    animeCard.classList.add('animeCard');
    
    const animeTitle = document.createElement('H2');
    animeTitle.classList.add('animeTitle');
    animeTitle.textContent = `${title}`;

    const animeImage = document.createElement('IMG');
    animeImage.classList.add('animeImage');
    animeImage.src = `${src}`;
    animeImage.alt = `${title}`;

    const animeRating = document.createElement('P');
    animeRating.classList.add('animeRating');
    animeRating.textContent = rating !== null ? `⭐ Rating: ${rating} / 10 ⭐` : `Rating: N/A`;

    const animeEpisodes = document.createElement('P');
    animeEpisodes.classList.add('animeEpisodes');
    animeEpisodes.textContent = episodes !== null ? `Episodios: ${episodes}` : `Episodios: N/A`;

    sectionDiv.appendChild(animeCard);

    animeCard.appendChild(animeTitle);
    animeCard.appendChild(animeImage);
    animeCard.appendChild(animeRating);
    animeCard.appendChild(animeEpisodes);
};

function crearCardLoading() {
    const loadingCard = document.createElement('DIV');
    const loadingText = document.createElement('P');

    loadingCard.classList.add('loadingCard');
    // Atributos HTML
    loadingText.textContent = 'Cargando...';

    loadingCard.appendChild(loadingText);
    sectionDiv.appendChild(loadingCard);
};

export {obtenerDatos, crearCardLoading};