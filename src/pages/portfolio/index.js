import React from "react";
import "./styles.css";
import gerome from "../../images/gerome.jpg"
import makeMyDate from "../../images/makeMyDate.png"

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
          <a href="https://gerome-the-gnome.herokuapp.com/" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="https://github.com/insideseanshead/gerome-the-gnome" className="btn btn-primary">
            GitHub
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
          <a href="#" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={gerome} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={gerome} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={gerome} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      <div className="card float-left m-2">
        <img src={gerome} className="card-img-top" alt="Gerome the Gnome Logo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary mr-3">
            Deployed Site
          </a>
          
          <a href="#" className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
      
      </div>
    </div>
  );
}
