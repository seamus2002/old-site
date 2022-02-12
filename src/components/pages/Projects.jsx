import React from "react";

import todoDemo from "../../images/todo-demo.gif";

function Projects() {
  return (
    <section id="projects" className="page">
      <div className="container-fluid">

        <h2 className="heading-text">Projects</h2>

        <div className="row">

          <div className="col-lg-6">
            <h3>To-Do List App for Android</h3>
            <br />

            <div className="row">

              <div className="col-lg-6">
                <h4 className="project-text">An Android app that allows building a To-Do list and basic To-Do items management functionality including adding new items, editing and deleting an existing item.</h4>
              </div>
              
              <div className="col-lg-6">
                <img className="android-demo" src={todoDemo} alt="demo"/>
              </div>
              
            </div>
            

            <a type="button" href="https://github.com/seamus2002/SimpleTodo" target="_blank" rel="noopener noreferrer" class="btn btn-success">Github <i class="fab fa-github"></i></a>

            <br />

          </div>


          <div className="col-lg-6">
            <h3>Hunter Class Search</h3>
            <br />

            <h4 className="project-text">A command line program that is able to tell the user information of class sections in Hunter College. I made this as I was learning how to use the Selenium library to scrape data from webpages.</h4>

            <a type="button" href="https://github.com/seamus2002/hunter-class-search" target="_blank" rel="noopener noreferrer" class="btn btn-success">Github <i class="fab fa-github"></i></a>
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default Projects;