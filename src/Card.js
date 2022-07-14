import React from 'react';

export default function Card() {
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
  console.log(movieData)
  return (
    <>
      <div className="card-holder">
        {movieData.lenght > 0 && movieData.map(movies=>{
          <Movies key={movies.id} data={movies}/>
        })}
      </div>
    </>
  );
}
