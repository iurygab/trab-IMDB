const ElementoParaInserirFilmes = document.getElementById('filmes');


function InserirFilmesNaTela(filmes) {
  ElementoParaInserirFilmes.innerHTML = '';
  filmes.forEach(movie => {
    const movieId = movie.id;
    const title = movie.title;
    const releaseDate = movie.release_date.split('-')[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const rating = movie.vote_average.toFixed(1);


    const section = document.createElement('section');
    section.className = 'cards';
    section.dataset.movieId = movieId;

    const infPart1 = document.createElement('div');
    infPart1.className = 'cards_infPart1';

    const img = document.createElement('img');
    img.src = posterPath;
    img.alt = 'Capa';
    img.className = 'cards_infPart1-capa';

    infPart1.appendChild(img);
    section.appendChild(infPart1);

    const infPart2 = document.createElement('div');
    infPart2.className = 'cards_infPart2';

    const titulo = document.createElement('h2');
    titulo.className = 'cards_infPart2-titulo';
    titulo.textContent = `${title} (${releaseDate})`;

    const details = document.createElement('div');
    details.className = 'cards_infPart2-details';

    const ratingDiv = document.createElement('div');
    const ratingImg = document.createElement('img');
    ratingImg.src = 'img/Star.svg';
    ratingImg.alt = 'star';
    ratingImg.className = 'cards_infPart2-icon';
    const ratingText = document.createElement('h3');
    ratingText.className = 'cards_infPart2-text';
    ratingText.textContent = rating;

    ratingDiv.appendChild(ratingImg);
    ratingDiv.appendChild(ratingText);
    details.appendChild(ratingDiv);


    infPart2.appendChild(titulo);
    infPart2.appendChild(details);
    section.appendChild(infPart2);


    ElementoParaInserirFilmes.appendChild(section);
  });
}

export { InserirFilmesNaTela }