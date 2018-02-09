import {connect} from "react-redux";
import ContactUs from "../../Contact";
import Pages from "../../Pages/pages";
import Posts from "../../Posts/posts";
import PostView from "../../Posts/PostView";
import * as Actions from "../actions/actions";

export const PostList = connect(
  (state) => (
     {
      posts: state.posts,
    }
  ),
  (dispatch, ownProps) => ({
    getPosts: dispatch(Actions.getAllPosts(ownProps.url)),
  }),
)(Posts);

export const PageList = connect(
  (state) => ({
    isLoaded: state.pages.loaded,
    pages: state.pages.pages,
  }),
  (dispatch, ownProps) => ({
    getPosts: dispatch(Actions.getAllPages(ownProps.url)),
  }),
)(Pages);

export const SelectedPost = connect(
  (state) => (
    {
      post: state.post,
    }
  ),
  (dispatch, ownProps) => {
    const id = /\d+/.exec(location.hash);
    const url = ownProps.url;
    return {getPost: dispatch(Actions.getPost(url, id[0]))};
  },
)(PostView);

export const ContactUsForm = connect(
  (state) => (
    {
      captcha: state.captcha,
    }
  ),
  (dispatch, ownProps) => ({
    getCaptcha: dispatch(Actions.getFormData()),
  }),
)(ContactUs);

export default PageList;
