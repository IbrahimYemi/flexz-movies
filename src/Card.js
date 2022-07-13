import React from 'react';

export default function Card() {
  // const cards = data.map((item) => {
  //   return (
  //     <div key={item.id} className={props.darkMode ? 'darkcard' : 'card'}>
  //       <h2>{item.title}</h2>
  //       <p>{item.description}</p>
  //     </div>
  //   );
  // });

  const cardcontent = (
    <div className="card-container">
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-picture-id1319479588?b=1&k=20&m=1319479588&s=170667a&w=0&h=bunblYyTDA_vnXu-nY4x4oa7ke6aiiZKntZ5mfr-4aM="
          alt=""
        />
        <div className="title-rating">
          <h3 className="title">film title</h3>
          <span className="rating">7.8</span>
        </div>
      </div>
      <div className="review">
        <button>Trailer</button>
      </div>
    </div>
  );

  return (
    <>
      <div className="card-holder">
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
        {cardcontent}
      </div>
    </>
  );
}
