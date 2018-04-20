import * as React from "react";
import {SiteLoader} from "./loader";

const article = (props) => {

  if (props) {
    const featureImage = props.featured._embedded["wp:featuredmedia"];
    const dateCreated = new Date(props.featured.date).toDateString();
    const feature = props.featured;
    return (
        <article className="feature-post">
          <header>
            <img src={(featureImage) ? featureImage[0].source_url :
                  "http://placehold.it/1080x640"} alt="" />
            <h1 dangerouslySetInnerHTML={{__html: feature.title.rendered}} />
          </header>
          <div dangerouslySetInnerHTML={{__html: feature.excerpt.rendered.match(/<p>.*?<\/p>/gm)}}/>
          <footer>
          <span className="time">{dateCreated}</span> &#8226;
          <span className="author">{feature._embedded.author[0].name}</span>
          <a onClick={(e) => props.handleClick(props.featured.id, e)}>Read Article</a>
          </footer>
      </article>
    );
} else {
  return (
    <SiteLoader/>
  );
}
};

export default article;
