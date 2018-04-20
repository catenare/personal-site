import * as React from "react";
import { Link } from "react-router-dom";
import {SiteLoader} from "./loader";

const PostView = (props) => {
  if ( props.post.post.id) {
    const post = props.post.post;
    const dateCreated = new Date(post.date).toDateString();
    const featureImage = (post._embedded["wp.featuredmedia"]) ?
    (post._embedded["wp:featuredmedia"][0].source_url) : "https://placeimg.com/400/200/arch";
    return (
      <article className="post-view">
        <Link className="link-back" to="/">{"\u261A"}</Link>
        <h2>{post.title.rendered}</h2>
        <div className="post-view-image">
          <img src={featureImage} alt={post.title.rendered} />
        </div>
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        <footer>
        <time
          dateTime={post.date}>{dateCreated}</time>
        <span>{post._embedded.author[0].name}</span>
        </footer>
        <Link className="link-back" to="/">{"\u261A"}</Link>
      </article>
    );
  } else {
    return (
      <SiteLoader />
    );
  }
};

export default PostView;
