import * as React from "react";

const post = (props) => {
  // const featureImage = props.post._embedded["wp:featuredmedia"];
  const featureImage = (props.post._embedded["wp:featuredmedia"]) ?
  (props.post._embedded["wp:featuredmedia"][0].source_url) :
  "https://placeimg.com/400/200/arch";
  const dateCreated = new Date(props.post.date).toDateString();
  const isOdd = (props.index % 2) ? "article-row" : "article-row article-row-reversed";
  return (
    <a href="#">
      <article className={isOdd}>
          <div className="article-row-img">
              <img src={featureImage}
              alt="picture of a whale eating a donkey" />
            </div>
            <div className="article-row-content">
              <h1 className="article-row-content-header">{props.post.title.rendered}</h1>
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
