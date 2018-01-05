import * as React from "react";

const page = (props) => {
  const {Page} = props;
  return (
  <div className="large-3 cell">
    <div className="card news-card">
      <img src="https://i.imgur.com/6jMbuU1.jpg" alt={Page.title.rendered} className="rounded"/>
      <div className="news-card-date">Sunday, 16th April</div>
      <article className="news-card-article">
        <h4 className="news-card-title">
          <a href="#">{Page.title.rendered}</a>
        </h4>
        <p className="news-card-description" dangerouslySetInnerHTML={{__html: Page.excerpt.rendered}} />
      </article>
      <div className="news-card-author">
        <div className="news-card-author-image">
          <img src="https://i.imgur.com/lAMD2kS.jpg" alt="user" />
        </div>
        <div className="news-card-author-name">
          By <a href="#">{Page._embedded.author.name}</a>
        </div>
      </div>
      </div>
  </div>
  );
};

export default page;
