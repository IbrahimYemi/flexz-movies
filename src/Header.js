import React from 'react';
import { useState } from 'react';

export default function Header() {
  const [bar, setBar] = useState(false);
  function handleClick() {
    setBar((prevBar) => !prevBar);
  }
  return (
    <header>
      <h1>Flexz-Movies</h1>
      <nav className={bar ? 'show' : 'none'}>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Developer</li>
          <li>About</li>
        </ul>
      </nav>
      <i
        className={!bar ? 'fa fa-bars' : 'fa fa-times'}
        onClick={handleClick}
      ></i>
    </header>
  );
}
