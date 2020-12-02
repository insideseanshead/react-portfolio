import React from "react";
import "./style.css";
import sites from "../../sites.json";
import wondir from "../../images/wondir.png"

export default function WebsiteCard(props) {
  return (
    <div className="row justify-content-center">
      <div className="card float-left m-2">
        <img src={sites[0].image} className="card-img-top" alt={sites[0].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[0].title}</h5>
          <p className="card-text">{sites[0].description}</p>
          <a
            href={sites[0].depolyed}
            className="btn btn-primary mr-3"
            target="_blank"
          >
            Deployed Site
          </a>
          <a href={sites[0].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>


      <div className="card float-left m-2">
        <img src={sites[1].image} className="card-img-top" alt={sites[1].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[1].title}</h5>
          <p className="card-text">{sites[1].description}</p>
          <a
            href={sites[1].depolyed}
            className="btn btn-primary mr-3"
            target="_blank"
          >
            Deployed Site
          </a>
          <a href={sites[1].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
