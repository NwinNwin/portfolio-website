// src/components/Project.js

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import github from "../../images/github.svg";

export default function Project({
  id,
  images,
  titleImage,
  logoImage,
  awardText,
  description,
  githubLink,
  websiteLink,
  backgroundColor,
  boxShadow,
  className,
  websiteImage,
}) {
  return (
    <div className={className} id={id}>
      <Carousel className="project-thumbnail" showThumbs={false}>
        {images.map((image, imgIndex) => (
          <div key={imgIndex}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>

      <div className="project-1-main">
        <img className="proj-text" src={titleImage} alt="title" />
        <div
          className="project-description"
          style={{
            background: backgroundColor,
            boxShadow: boxShadow,
          }}
        >
          <img className="description-img" src={logoImage} alt="logo" />
          {awardText && (
            <div style={{ marginBottom: "5%" }}>
              <p className="award-text">{awardText}</p>
            </div>
          )}
          <p>{description}</p>
          <div className="btn-div">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <div className="github-btn">
                  <img className="github" src={github} alt="GitHub" />
                  <p>&nbsp;GitHub</p>
                </div>
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noreferrer">
                <div className="devpost-btn">
                  <img className="github" src={websiteImage} alt="Website" />
                  <p>&nbsp;Website</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
