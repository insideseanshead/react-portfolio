import React from "react";
import "./styles.css";
import gerome from "../../images/gerome.jpg"
import makeMyDate from "../../images/makeMyDate.png"
import directory from "../../images/directory.png"
import readMe from "../../images/readMe.png"
import schedule from "../../images/schedule.png"
import quiz from "../../images/quiz.png"

export default function index() {
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
      <div className="card float-left m-2">
        <img src={gerome} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://gerome-the-gnome.herokuapp.com/" className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          
          <a href="https://github.com/insideseanshead/gerome-the-gnome" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={makeMyDate} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://mfallesen.github.io/plannerly/" className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          
          <a href="https://github.com/mfallesen/plannerly" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={directory} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://sean-employee-directory.herokuapp.com/" className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          
          <a href="https://github.com/insideseanshead/employee-directory" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={schedule} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://insideseanshead.github.io/Day-Planner/" className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          
          <a href="https://github.com/insideseanshead/Day-Planner" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={readMe} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/insideseanshead/readmeGenerator" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={quiz} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://insideseanshead.github.io/Quiz/" className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          
          <a href="https://github.com/insideseanshead/Quiz" className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
      
      </div>
    </div>
  );
}
