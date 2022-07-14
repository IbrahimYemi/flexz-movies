import React, { useState } from 'react';

export default function Movieset(item) {
  return (
    <div key={item.id} className="card-container">
      <div className="card">
        <img src={IMG_URL + item.poster_path} alt={item.title} />
        <div className="title-rating">
          <h3 className="title">{item.title}</h3>
          <span className="rating">{item.vote_average}</span>
        </div>
      </div>
      <div className="release">{item.release_date}</div>
      <div className="review">
        <button onClick={handleShow}>Trailer</button>
      </div>
    </div>
  );
}
