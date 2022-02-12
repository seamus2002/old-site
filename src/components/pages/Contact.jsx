import React from "react";

function Contact() {
  return ( 
  <section id="contact" className="page">
    <div className="container-fluid">
      <h2 className="heading-text">Contact Me</h2>
      <h3>You can currently find me on LinkedIn and GitHub!</h3>
      <button type="button" href="https://www.linkedin.com/in/seamus-english-804b121b0/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">LinkedIn <i class="fab fa-linkedin"></i></button>
      <a type="button" href="https://github.com/seamus2002/" target="_blank" rel="noopener noreferrer" class="btn btn-success">Github <i class="fab fa-github"></i></a>
      </div>
  </section>
  )
}

export default Contact;