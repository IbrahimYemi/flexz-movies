import React from 'react';

export default function Movies() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={movies.backdrop_path}
          alt={movies.title}
        />
        <div className="title-rating">
          <h3 className="title">{movies.title}</h3>
          <span className="rating">{movies.vote_average}</span>
        </div>
      </div>
      <div className="review">
        <button>Trailer</button>
      </div>
    </div>
  );
}
