import React from 'react';

export default function Movies() {
  const [movieData, setMovieData] = React.useState([]);

  const API_KEY = 'api_key=282292c1d01116b3d3ccf1c8c40cf303';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  const searchURL = BASE_URL + '/search/movie?' + API_KEY;

  React.useEffect(function () {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);
  console.log(movieData);

  const movie = ['1', '2', '3'];
  const cards = movieData.map((item) => {
    return (
      <div className="card-container">
        <div className="card">
          <img src={movieData.poster_path} alt={movieData.title} />
          <div className="title-rating">
            <h3 className="title">{movieData.title}</h3>
            <span className="rating">{movieData.vote_average}</span>
          </div>
        </div>
        <div className="release">{movieData.release_date}</div>
        <div className="review">
          <button>Trailer</button>
        </div>
      </div>
    )
  });
  return(
    <div>{cards}</div>
  )
};


// export default function Movies(title, poster_path, vote_average, release_date) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500';
 
//   );
// }
