import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-brands-svg-icons';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Developer() {
  const Envelope = <i className="fa fa-envelope"></i>;
  return (
    <div className="developer">
      <h2>DEVELOPER</h2>
      <div className="developer-picture">
        <div className="aboutme-image">
          <img
            src="https://raw.githubusercontent.com/IbrahimYemi/DeanYemi134/main/IMG-20220622-WA0002.jpg"
            alt=""
          />
        </div>
        <div className="about-me">
          <p className="about-developer">
            Hi there, I am Yemi, a Nigeria based web developer, with over two
            years of experience with profound knowledge of solving problems,
            creative and dedication to building, maintaining, and optimizing the
            performance of user-centric, high impact website for brand and
            companies
          </p>
          <a
            className="hire-me-text"
            href="mailto:ibrahimsharafadeen95@gmail.com?Subject=HELLO YEMI,"
            target="blank"
          >
            {Envelope} Hire Me
          </a>
        </div>
      </div>
      <div className="about-app">
        how i created it. the api and the resources
      </div>
    </div>
  );
}
