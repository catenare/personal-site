import * as React from "react";
import {PostList} from "./store/containers/containers";

const Blog = (props) => {
  return (
    <PostList {...props} />);
};

export default Blog;
