// About.js

import React from 'react';
import '../styles/unicons.css';
import '../styles/tooplate-style.css';
import '../files/myresume.pdf';
import dp from '../images/dark.png';
import '../styles/About.css'; // Add this line to import the CSS file

function About() {
  return (
    <div>
      <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <h1 className="animated animated-text">
                  <span className="mr-2">Hello 👋🏻</span>
                  <br />
                  <span className="mr-2">I am U V Phani Charan</span>
                  <br />
                  <div className="animated-info">
                    <span className="animated-item">Passionate About Web Development</span>
                    <span className="animated-item">Data Visualization Enthusiast</span>
                    <span className="animated-item">Cloud Computing Aspirant</span>
                  </div>
                  <br />
                </h1>
                <p>
                Building a successful product is a challenge. As a Full Stack Developer, 
                I can oversee everything from initial conception to deployment and ongoing management.
                </p>
                <div className="custom-btn-group mt-4">
                  <a href="./files/myresume.pdf" className="btn mr-lg-2 custom-btn">
                    <i className="uil uil-file-alt"></i> Open Resume
                  </a>
                  <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">
                    Get a free quote
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 d-flex justify-content-center align-items-center">
              <div className="highlighted-image">
                <img src={dp} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
