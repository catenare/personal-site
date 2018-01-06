import {connect} from "react-redux";
import Pages from "../../Pages/pages";
import Posts from "../../Posts/posts";

export const PostList = connect(
  (state) => {
    return {
      posts: state.posts,
    };
  },
  null,
)(Posts);

export const PageList = connect(
  (state) => ({
    isLoaded: state.pages.loaded,
    pages: state.pages.pages,
  }),
  null,
)(Pages);

export default PageList;
