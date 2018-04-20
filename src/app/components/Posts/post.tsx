import * as React from "react";

const post = (props) => {
  const featureImage = (props.post._embedded["wp:featuredmedia"]) ?
  (props.post._embedded["wp:featuredmedia"][0].source_url) :
  "https://placeimg.com/400/200/arch";
  const dateCreated = new Date(props.post.date).toDateString();
  // const isOdd = (props.index % 2) ? "article-row" : "article-row article-row-reversed";
  return (
  <article className="article-post">
    <div className="post-image">
      <img src={featureImage} alt={props.post.title.rendered} />
      </div>
      <div className="post-detail">
      <h2>{props.post.title.rendered}</h2>
      <div className="post-description"
      dangerouslySetInnerHTML = {{__html: props.post.excerpt.rendered.match(/<p>.*?<\/p>/gm)}} />
      <footer className="post-footer">
      <div className="post-meta">
      <time
        dateTime={props.post.date}>{dateCreated}</time>
      <span>{props.post._embedded.author[0].name}</span>
      </div>
      <a className="post-link" href="#" onClick={(e) => props.handleClick(props.post.id, e)}>Read Article</a>
        </footer>
        </div>
  </article>
  );
};
export default post;
