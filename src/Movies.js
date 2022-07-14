import React from 'react';

export default function Movies(title, poster_path, vote_average, release_date) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="card-container">
      <div className="card">
        <img src={data.poster_path} alt={data.title} />
        <div className="title-rating">
          <h3 className="title">{data.title}</h3>
          <span className="rating">{data.vote_average}</span>
        </div>
      </div>
      <div className="release">{data.release_date}</div>
      <div className="review">
        <button>Trailer</button>
      </div>
    </div>
  );
}
