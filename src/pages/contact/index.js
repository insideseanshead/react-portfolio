import React from "react";
import profile from "../../images/profile.png";
import linkdin from "../../images/linkedin.png";
import github from "../../images/github.png";
import "./styles.css";


export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <img id="profile_img" src={profile} alt="Profile picture of Sean Morgan"/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <div class="card mt-3"> */}
            <h3 className="mt-2">Developer and Illustrator</h3>
            <p>
              Full stack web developer and illustrator, with a passion for good
              design and problem solving. Recent graduate of the University of
              Washington’s Fullstack development program where I have expanded
              my skills in front end web design as well as learning new
              technologies such as database management and react. In a recent
              project I worked with a team of four to develop a travel app that
              allows travelers to use geo location to link blog posts and photos
              to a map so users can track their adventures and not only see
              where they’ve been but how they got there. I am eager to combine
              my skills in illustration design with my development skills to
              build clean fun ui for you and your clients.
            </p>
            <hr />
            {/* </div> */}
          </div>
        </div>
        <div className="row mb-5" id="links">
          <div className="col">
            <ul className="justify-content-center">
                <li>(415) 378-1824</li>
              <li>insideseanshead@gmail.com</li>
              <li>
                <a href="https://drive.google.com/file/d/1WJ0RjLmokmPXnAiPWqg-sg4D83VAvQUs/view?usp=sharing" target="_blank">Resume</a>
              </li>
            </ul>
            <a class="mr-4" href="https://www.linkedin.com/in/sean-morgan-1398b4a1/" target="_blank">
              <img src={linkdin} />
            </a>
            <a href="https://github.com/insideseanshead" target="_blank">
              <img src={github} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
