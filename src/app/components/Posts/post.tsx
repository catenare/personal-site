import * as React from "react";

const post = (props) => {
  // const featureImage = props.post._embedded["wp:featuredmedia"];
  const featureImage = (props.post._embedded["wp:featuredmedia"]) ?
  (props.post._embedded["wp:featuredmedia"][0].source_url) :
  "https://placeimg.com/400/200/arch";
  const dateCreated = new Date(props.post.date).toDateString();
  // const isOdd = (props.index % 2) ? "article-row" : "article-row article-row-reversed";
  return (
  <article>
    <a href="#" onClick={(e) => props.handleClick(props.post.id, e)}>
    <header>
      <img src={featureImage} alt="picture of a whale eating a donkey" />
      <h1>{props.post.title.rendered}</h1>
      </header>
      <div
      dangerouslySetInnerHTML = {{__html: props.post.excerpt.rendered.match(/<p>.*?<\/p>/gm)}} />
      <footer>
      <p>{props.post._embedded.author[0].name}</p>
      <time
        dateTime={props.post.date}>{dateCreated}</time>
        </footer>
    </a>
  </article>
  );
};
export default post;
