import * as React from "react";

const page = (props) => {
  const {Page} = props;
  const featureImage = (Page._embedded["wp:featuredmedia"]) ?
  (Page._embedded["wp:featuredmedia"][0].source_url) :
  "https://placeimg.com/400/200/arch";

  return (
  <div className="large-4 cell flex-container">
    <div className="card news-card">
      <img className="card-image"
        src={featureImage}
        alt={Page.title.rendered}
        />
      <div className="card-section">
      <article className="news-card-article">
      <div className="news-card-date">Sunday, 16th April</div>
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
          By <a href="#">{Page._embedded.author[0].name}</a>
        </div>
        </div>
      </div>
      </div>
  </div>
  );
};

export default page;
