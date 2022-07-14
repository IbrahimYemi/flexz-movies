import React, { useState } from 'react';
import { Modal, show, Button } from 'react-bootstrap';

export default function Test() {
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

  const cards = movieData.map((item) => {
    const mystyle1 = {
      color: 'red',
    };
    const mystyle2 = {
      color: 'orange',
    };
    const mystyle = item.vote_average < 7 ? mystyle1 : mystyle2;
    return (
      <div key={item.id} className="card-containe">
        <div className="carfd">
          <img src={IMG_URL + item.poster_path} alt={item.title} />
          <div className="titlef-rating">
            <h3 className="titlde">{item.title}</h3>
            <span className="ratding" style={mystyle}>
              {item.vote_average}
            </span>
          </div>
        </div>
        <div className="releasse">{item.release_date}</div>
        <div className="revieszw">
          <button onClick={handleShow}>See More</button>
        </div>
      </div>
    );
  });
  return <div className="card-holder">{cards}</div>;
}

// export default function Movies(title, poster_path, vote_average, release_date) {
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//   );
// }
