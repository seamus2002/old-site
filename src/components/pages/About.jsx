import React from "react";

import portrait from "../../images/portrait.jpg"

function About() {
  return (
    <section id="about" className="page">
      <div className="container-fluid">
        <h2 className="heading-text">About</h2>
        <div className="row">
          <div className="col-lg-6 about-text">
            <h3>I am currently a Sophomore at Hunter College majoring in Computer Science and minoring in Mathematics. I have been interested in programming ever since I learned to modify video games at the age of 10. Today, I am passionate about web development and have been learning for months how to create practical web pages.</h3>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <img className="portrait" src={portrait} alt="portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;