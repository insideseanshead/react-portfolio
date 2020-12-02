import React from "react";
import "./style.css";
import sites from "../../sites.json";
import wondir from "../../images/wondir.png"

export default function WebsiteCard(prop) {
  return (
    <div className="row justify-content-center">
      <div className="card float-left m-2">
        <img src={sites[0].image} className="card-img-top" alt={sites[0].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[0].title}</h5>
          <p className="card-text">{sites[0].description}</p>
          <a
            href={sites[0].deployed}
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
            href={sites[1].deployed}
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

      <div className="card float-left m-2">
        <img src={sites[2].image} className="card-img-top" alt={sites[2].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[2].title}</h5>
          <p className="card-text">{sites[2].description}</p>
          <a
            href={sites[2].deployed}
            className="btn btn-primary mr-3"
            target="_blank"
          >
            Deployed Site
          </a>
          <a href={sites[2].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>

      <div className="card float-left m-2">
        <img src={sites[3].image} className="card-img-top" alt={sites[3].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[3].title}</h5>
          <p className="card-text">{sites[3].description}</p>
          <a
            href={sites[3].deployed}
            className="btn btn-primary mr-3"
            target="_blank"
          >
            Deployed Site
          </a>
          <a href={sites[3].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>

      <div className="card float-left m-2">
        <img src={sites[4].image} className="card-img-top" alt={sites[4].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[4].title}</h5>
          <p className="card-text">{sites[4].description}</p>
          <a href={sites[4].deployed} className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          <a href={sites[4].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>

      <div className="card float-left m-2">
        <img src={sites[5].image} className="card-img-top" alt={sites[5].alt} />
        <div className="card-body">
          <h5 className="card-title">{sites[5].title}</h5>
          <p className="card-text">{sites[5].description}</p>
         
          <a href={sites[5].github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>

      
    </div>
  );
}
