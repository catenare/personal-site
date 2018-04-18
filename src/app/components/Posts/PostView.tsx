import * as React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
  if ( props.post.post.id) {
    const post = props.post.post;
    return (
      <article className="post-view">
        <Link to="/">Back</Link>
        <header>
        <h2>{post.title.rendered}</h2>
        </header>
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
      </article>
    );
  } else {
    return (
      <h1>Working on it</h1>
    );
  }
};
export default PostView;
