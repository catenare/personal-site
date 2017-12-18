import * as React from "react";

const post = (props) => {
  return (
    <a href="#">
          <article className="article-row">
            <div className="article-row-img">
              <img src="https://placehold.it/200" alt="picture of a whale eating a donkey" />
            </div>
            <div className="article-row-content">
              <h1 className="article-row-content-header"> {props.post.title.rendered}</h1>
                <p className="article-row-content-description"
                dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}} />
              <p className="article-row-content-author">By Yeti</p>
              <time className="article-row-content-time" dateTime="2008-02-14 20:00">July 14th 2021</time>
            </div>
          </article>
        </a>
  );
}
export default post;
