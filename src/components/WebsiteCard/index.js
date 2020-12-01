import React from 'react'
import "./styles.css"

export default function WebsiteCard(props) {
    return (
        <div className="card float-left m-2">
        <img src={props.image} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={props.depolyed} className="btn btn-primary mr-3" target="_blank">
            Deployed Site
          </a>
          <a href={props.github} className="btn btn-primary" target="_blank">
            Github
          </a>
        </div>
      </div>
    )
}
