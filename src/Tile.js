import React from 'react';

function Tile(props) {
  return (
    <div className="tile-holder">
        <div className="project-tile">
          <img src={props.specs.cover_img} className={props.specs.id % 2 === 0 ? "img-right" : undefined} loading="lazy" alt="project snippet" data-aos={props.specs.id % 2 === 0 ? "fade-left" : "fade-right"}/>
          <div className={props.specs.id % 2 === 0 ? "project-specs left" : "project-specs"} data-aos={props.specs.id % 2 === 0 ? "fade-right" : "fade-left"}>
            <h3>{props.specs.title}</h3>
            <p>{props.specs.description}</p>
            <a href={props.specs.repo_link} className={props.specs.id % 2 === 0 ? "project-btn  left-btn" : "project-btn"} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
    </div>
  );
}

export default Tile;
