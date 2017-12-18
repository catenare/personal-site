import * as React from "react";

const post = (props) => {
  const featureImage = props.post._embedded["wp:featuredmedia"];
  const dateCreated = new Date(props.post.date).toDateString();
  return (
    <a href="#">
          <article className="article-row">
            <div className="article-row-img">
              <img src={(featureImage) ? featureImage[0].source_url :
                 "https://placehold.it/200"} width="200px" alt="picture of a whale eating a donkey" />
            </div>
            <div className="article-row-content">
              <h1 className="article-row-content-header"> {props.post.title.rendered}</h1>
                <p className="article-row-content-description"
                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} />
              <p className="article-row-content-author">{props.post._embedded.author[0].name}</p>
              <time className="article-row-content-time" dateTime={props.post.date}>{dateCreated}</time>
            </div>
          </article>
        </a>
  );
};
export default post;
