import * as React from "react";

const article = () => {
  return (
    <div className="large-3 cell">
      <div className="card news-card">
          <a href="#">
            <div className="background-card-image">
                <img src="http://placehold.it/640x427" alt="" />
            </div>
            <div className="image-hover"></div>
          </a>
          <div className="card-section">
            <div className="news-card-tag">
              <a className="label" href="#">category</a></div>
            <div className="news-card-date">
                <span className="time">24 Nov 2017</span> &#8226;
                <span className="author">Author Name</span>
            </div>
            <article className="news-card-article">
              <h4 className="news-card-title">
                <a href="#">5 Features To Watch Out For in Angular v4</a>
              </h4>
              <p className="news-card-description">Lorem ipsum dolor sit amet,
               consectetur adipisicing elit. Recusandae facere, ipsam quae sit, eaque perferendis commodi!...</p>
            </article>
            <div className="more">
                <a href="#">Read more</a>
            </div>
      </div>
    </div>
  </div>
  );
};

export default article;
