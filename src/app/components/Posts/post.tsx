import * as React from "react";

const post = (props) => {
  // const featureImage = props.post._embedded["wp:featuredmedia"];
  const featureImage = (props.post._embedded["wp:featuredmedia"]) ?
  (props.post._embedded["wp:featuredmedia"][0].source_url) :
  "https://placeimg.com/400/200/arch";
  const dateCreated = new Date(props.post.date).toDateString();
  // const isOdd = (props.index % 2) ? "article-row" : "article-row article-row-reversed";
  return (
    <li className="large-3 cell" onClick={(e) => props.handleClick(props.post.id, e)}>
      <article className="card">
        <div className="card-divider">
          <h1 className="article-row-content-header">{props.post.title.rendered}</h1>
        </div>
        <div className="card-image">
          <img src={featureImage} alt="picture of a whale eating a donkey" />
        </div>
        <div className="card-section">
          <p className="article-row-content-description"
             dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} />
        </div>
        <p className="article-row-content-author">{props.post._embedded.author[0].name}</p>
        <time className="article-row-content-time" dateTime={props.post.date}>{dateCreated}</time>
      </article>
    </li>
  );
};
export default post;
