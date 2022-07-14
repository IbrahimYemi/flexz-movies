import React, { useState } from 'react';
import Movies from './Movies';
import Footers from './Footers';
import Developer from './Developer';
import { Modal, show, Button } from 'react-bootstrap';

export default function Card({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <Movies />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="card-img-top"
            onClick={handleClose}
            style={{ width: '14rem' }}
            src={IMG_URL + poster_path}
          />
          <h3>{title}</h3>
          <h4>IMDb: {vote_average}</h4>
          <h5>Release Date: {release_date}</h5>
          <br></br>
          <h6>Overview</h6>
          <p>{overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Developer /> */}
    </div>
  );
}
