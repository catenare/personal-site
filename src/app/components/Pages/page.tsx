import * as React from "react";

const page = (props) => {
  const {Page} = props;
  // console.log("Page:", Page.title.rendered);
  return (
  <div className="large-3 cell">
    <div className="card news-card">
      <img src="https://i.imgur.com/6jMbuU1.jpg" alt={Page.title.rendered} className="rounded"/>
      <div className="news-card-date">Sunday, 16th April</div>
      <article className="news-card-article">
        <h4>{Page.title.rendered}</h4>
        <p dangerouslySetInnerHTML={{__html: Page.excerpt.rendered}} />
      </article>
      <div className="news-card-author">
        <div className="news-card-author-name">
          {/* By <a href="#">{Page.props._embedded.author.name}</a> */}
        </div>
      </div>
      </div>
  </div>
  );
};

export default page;
