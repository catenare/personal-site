import {connect} from "react-redux";
import Pages from "../../Pages/pages";
import Posts from "../../Posts/posts";
import Users from "../../Users/Users";

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

export const UserList = connect(
  (state) => {
    return {
      users: state.users,
    };
  },
  null,
)(Users);

export default PageList;
