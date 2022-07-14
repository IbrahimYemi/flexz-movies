import React, { useState } from 'react';
import { Modal, show, Button } from 'react-bootstrap';

export default function Movies() {
  const [movieData, setMovieData] = React.useState([]);

  const API_KEY = 'api_key=282292c1d01116b3d3ccf1c8c40cf303';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  const searchURL = BASE_URL + '/search/movie?' + API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  React.useEffect(function () {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovieData(data.results));
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const movie = ['1', '2', '3'];
  const cards = movieData.map((item) => {
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="card-img-top"
              onClick={handleClose}
              style={{ width: '14rem' }}
              src={IMG_URL + item.poster_path}
            />
            <h3>{item.title}</h3>
            <h4>IMDb: {item.vote_average}</h4>
            <h5>Release Date: {item.release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{item.overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  });
  return <div className="card-holder">{cards}</div>;
}

// export default function Movies(title, poster_path, vote_average, release_date) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//   );
// }
