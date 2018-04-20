import * as React from "react";
import {SiteLoader} from "./loader";

const article = (props) => {

  if (props) {
    const featureImage = props.featured._embedded["wp:featuredmedia"];
    const dateCreated = new Date(props.featured.date).toDateString();
    const feature = props.featured;
    return (
        <article className="feature-post">
          <div className="post-image">
          <img src={(featureImage) ? featureImage[0].source_url :
                  "http://placehold.it/1080x640"} alt="" />
          </div>
          <div className="post-detail">
            <h1 dangerouslySetInnerHTML={{__html: feature.title.rendered}} />
          <div className="post-description"
            dangerouslySetInnerHTML={{__html: feature.excerpt.rendered.match(/<p>.*?<\/p>/gm)}}/>
          <footer className="post-footer">
          <span className="time">{dateCreated}</span> &#8226;
          <span className="author">{feature._embedded.author[0].name}</span>
          <a className="post-link" onClick={(e) => props.handleClick(props.featured.id, e)}>Read Article</a>
          </footer>
          </div>
      </article>
    );
} else {
  return (
    <SiteLoader/>
  );
}
};

export default article;
