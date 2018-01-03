import {connect} from "react-redux";
import Posts from "../posts";

const PostList = connect(
  (state) => {
    return {
      posts: state.posts,
    };
  },
  null,
)(Posts);

export default PostList;
