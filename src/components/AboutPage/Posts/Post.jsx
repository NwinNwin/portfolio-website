import React from "react";
import myselfpixel from "../../../images/myselfpixel.png";
import "../AboutPage.css";

export default function Post({ post_img, date, description, isLarge = false }) {
  return (
    <div className="postings">
      <div className="post-owner">
        <img className="pfp-post" src={myselfpixel} alt="pfp" />
        <div
          style={{
            marginLeft: "15px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Dang Nguyen </p>
          <p>{date} 🌎</p>
        </div>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>
      <div
        style={{
          margin: "2% 0",
          textAlign: "center",
          background: "white",
          padding: "3%",
        }}
      >
        {Array.isArray(post_img) ? (
          post_img.map((img, index) => (
            <img
              key={index}
              className={isLarge ? "post-pic-big" : "post-pic"}
              src={img}
              alt={`post ${index}`}
            />
          ))
        ) : (
          <img
            className={isLarge ? "post-pic-big" : "post-pic"}
            src={post_img}
            alt="post"
          />
        )}
      </div>
      <p>Like &nbsp; • &nbsp; Comment &nbsp; • &nbsp; Share</p>
    </div>
  );
}
