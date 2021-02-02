import React from "react";
import "./styles.css";
import WebsiteCard from "../../components/WebsiteCard";

const sites = [
  {
    id: 1,
    image:
      "https://seanmorgandesigns.com/static/images/gallery.jpg",
    alt: "Illustration Gallery",
    title: "Reactive Image Gallery App",
    description:
      "An image gallery app that uses Cloudinary, React and Flex Box to dynamically create load images.",
    deployed: "https://sean-morgan-illustration.herokuapp.com/",
    github: "https://github.com/insideseanshead/illustration-portfolio",
  },
  {
    id: 2,
    image:
    "https://seanmorgandesigns.com/static/images/wondir.png",
    alt: "Wondir Logo",
    title: "Wondir",
    description: "NPC Generator for Dungeons and Dragons.",
    deployed: "https://wandir-front.herokuapp.com/",
    github: "https://github.com/asmarcd/wandir-front-end",
  },
  {
    id: 3,
    image:
    "https://seanmorgandesigns.com/static/images/gerome.jpg",
    alt: "Geomore the Gnome Logo",
    title: "Gerome the Gnome",
    description: "NPC Generator for Dungeons and Dragons.",
    deployed: "https://gerome-the-gnome.herokuapp.com/",
    github: "https://github.com/insideseanshead/gerome-the-gnome",
  },
  {
    id: 4,
    image:
    "https://seanmorgandesigns.com/static/images/makeMyDate.png",
    alt: "Make My Date Logo",
    title: "Make my Date",
    description:
      "Dating app that selects random night out you and that special someone.",
    deployed: "https://mfallesen.github.io/plannerly/",
    github: "https://github.com/mfallesen/plannerly",
  },
  {
    id: 5,
    image:
    "https://seanmorgandesigns.com/static/images/schedule.png",
    alt: "Day planner screen shot",
    title: "Day Planner",
    description:
      "A scheduling app that color codes time of day and when user has something scheduled.",
    deployed: "https://insideseanshead.github.io/Day-Planner/",
    github: "https://github.com/insideseanshead/Day-Planner",
  },
  {
    id: 6,
    image:
    "https://seanmorgandesigns.com/static/images/readMe.png",
    alt: "ReadMe generator screen shot",
    title: "ReadMe Generator",
    description:
      "A node application to help developers write readMe documents.",
    github: "https://github.com/insideseanshead/readmeGenerator",
  },
];

export default function index() {
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        {sites.map((site) => (
          <div className="card float-left m-2" key={site.id}>
            <img src={site.image} className="card-img-top" alt={site.alt} />
            <div className="card-body">
              <h5 className="card-title">{site.title}</h5>
              <p className="card-text">{site.description}</p>
              <a
                href={site.deployed}
                className="btn btn-primary mr-3"
                target="_blank"
              >
                Deployed Site
              </a>
              <a href={site.github} className="btn btn-primary" target="_blank">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
