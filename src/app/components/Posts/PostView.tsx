import * as React from "react";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/actions";

const PostView = (props) => {
  console.log("PostView: ", props);
  if ( props.post.post.id) {
    const post = props.post.post;
    console.log("post: ", post);
    return (
      <section className="cn-c-blog grid-container cn-l-section cn-section-internal">
        <Link to="/">Home</Link>
        <h2>{post.title.rendered}</h2>
        <article>
          <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </article>
      </section>
    );
  } else {
    return (
      <h1>Working on it</h1>
    );
  }
};
export default PostView;
