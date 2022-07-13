import React from 'react';
import { link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const image = [
    'https://media.istockphoto.com/photos/this-partys-on-fire-picture-id494388654?b=1&k=20&m=494388654&s=170667a&w=0&h=_ZftfA-S_tn9_wK6SrjHjlGOCAQPe0EST9XC9OHLcZg=',
    'https://media.istockphoto.com/photos/the-best-fans-a-band-could-want-picture-id502131959?b=1&k=20&m=502131959&s=170667a&w=0&h=8efBzeqguArASWGYfWhK5EdgNIJvZm-nvZ42i9DsS1A=',
    'https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM=',
    'https://media.istockphoto.com/photos/fans-clapping-at-concert-picture-id515258621?k=20&m=515258621&s=612x612&w=0&h=Oti-2wTlY4r6kJWi7s36Jmw0Y5iJVG8JW9mcBFH6ePw=',
    'https://media.istockphoto.com/photos/excited-young-female-is-sitting-on-backseat-of-a-car-commuting-home-picture-id1345472138?k=20&m=1345472138&s=612x612&w=0&h=w_Hw_leDZBgwEAMSuLvdaLKK5rkecT0byfyWQUjfU7o=',
  ];

  var randomNum = '';
  const [headpix, setHeadpix] = React.useState(image[0]);
  function changeIt() {
    const num = Math.trunc(Math.random() * image.length);
    randomNum = image[num];
    setHeadpix(randomNum);
  }

  useEffect(() => {
    const interval = setInterval(changeIt, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="frontpage">
        <img src={headpix} alt="" className="frontpage-image" />
        <div className="frontpage-words">
          <span>Flexz-movies; get a thriller from the trailer.</span>
        </div>
        <input type="text" className="search" placeholder="...search" />
      </div>
    </div>
  );
}
