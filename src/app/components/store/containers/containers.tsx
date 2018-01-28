import {connect} from "react-redux";
import Pages from "../../Pages/pages";
import Posts from "../../Posts/posts";
import PostView from "../../Posts/PostView";
import * as Actions from "../actions/actions";

export const PostList = connect(
  (state) => {
    return {
      state,
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


const mapsStateToProps = (state, ownProps) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = /\d+/.exec(location.hash);
  const url = ownProps.url;
  return {
    getPost: dispatch(Actions.getPost(url, id[0])),
  };
};

export const SelectedPost = connect(mapsStateToProps, mapDispatchToProps)(PostView);

export default PageList;
