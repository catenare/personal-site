import * as React from "react";
import { Link } from "react-router-dom";

const PostView = (props) => {
  console.log("PostView Props: ", props);
  return (
    <section className="cn-c-blog grid-container cn-l-section cn-section-internal">
      <Link to="/">Home</Link>
      <h2>View This Post</h2>
    </section>
  )
};

export default PostView;
