import React from 'react';

export default function Card() {
  const [movieData, setMovieData] = React.useState([]);

  const API_KEY = 'api_key=282292c1d01116b3d3ccf1c8c40cf303';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const searchURL = BASE_URL + '/search/movie?' + API_KEY;

  React.useEffect(function () {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);
  console.log(movieData)
  // const cardcontent = (
  //   <div className="card-container">
  //     <div className="card">
  //       <img
  //         src="https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM="
  //         alt=""
  //       />
  //       <div className="title-rating">
  //         <h3 className="title">film title</h3>
  //         <span className="rating">7.8</span>
  //       </div>
  //     </div>
  //     <div className="review">
  //       <button>Trailer</button>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="card-holder">
        {movieData.lenght > 0 && movieData.map(movies=>{
          <Movies key={movies.id} data={movie}/>
        })}
      </div>
    </>
  );
}
