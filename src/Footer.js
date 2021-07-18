import React from 'react';
import './Footer.css';

export default function Footer() {
  return <div className="text-center" id="open-source-link">
    <a
      href="https://github.com/ashleynmoon/weather-app-project-moon"
      target="_blank"
      rel="noreferrer"
      id="code-link"
    >
      Open-source code
    </a>
    by Ashley Moon
    <br />
    <a
      href="https://www.instagram.com/rachael__j/?hl=en"
      target="_blank"
      rel="noreferrer"
      id="code-link"
    >
      Background Images
    </a>
    provided by Rachael Mckenny
  </div>;
}