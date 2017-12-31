import * as React from "react";

const post = (props) => {
  const featureImage = props.post._embedded["wp:featuredmedia"];
  const dateCreated = new Date(props.post.date).toDateString();
  return (
    <a href="#">
          <article className="grid-x grid-margin-x grid-padding-x">
            <div className="large-3 cell">
              <img src={(featureImage) ? featureImage[0].source_url :
                 "https://placehold.it/400"} width="200px" alt="picture of a whale eating a donkey" />
            </div>
            <div className="large-9 cell">
              <h1>{props.post.title.rendered}</h1>
                <p
                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} />
              <p>{props.post._embedded.author[0].name}</p>
              <time dateTime={props.post.date}>{dateCreated}</time>
            </div>
          </article>
        </a>
  );
};
export default post;
