import axios from "axios";
export const GET_POST = "GET POST";
export const GET_POSTS = "GET POSTS";
export const GET_FEATURED_POST = "GET_FEATURED_POST";
export const SET_FEATURED_POST = "SET_FEATURED_POST";
export const ADD_POSTS = "ADD_POSTS";
export const SET_POSTS = "SET_POSTS";
export const POSTS_PENDING = "POSTS_PENDING";
export const POSTS_FULFILLED = "POSTS_FULFILLED";
export const POSTS_REJECTED = "POSTS_REJECTED";

export const getPost = (id) => {
  return {
    payload: {
      id,
    },
    type: GET_POST,
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getAllPosts = (dispatch, url) => {
  dispatch({type: POSTS_PENDING });
  axios.get(url).then((response) => {
    dispatch(setPosts(response.data));
    dispatch(setFeaturedPost(response.data));
  }).catch((e) => dispatch(setError(e)));
};

// axios.get(this.props.url)
    //   .then( (response) => {
    //     this.props.dispatch(actions.setPosts(response.data));
    //     this.props.dispatch(actions.setFeaturedPost(response.data));
    //   })
    //   .catch((e) => console.log("error", e));

export const getFeaturedPost = () => {
  return {
    type: GET_FEATURED_POST,
  };
};

const featurePost = (posts) => {
  let post;
  const featurePosts = posts.filter( (p) => p.sticky === true);
  if (!featurePosts) {
    post = posts[0];
  } else {
    post = featurePosts[0];
  }
  return post;
};

export const setFeaturedPost = (posts) => {
  return {
    payload: {
      loaded: true,
      post: featurePost(posts),
    },
    type: SET_FEATURED_POST,
  };
};

export const setError = (e) => {
  return {
    payload: {
      error: e,
      loaded: true,
      loading: false,
    },
    type: POSTS_REJECTED,
  };
};

export const setPosts = (posts) => {
  return {
    payload: {
      loaded: true,
      posts,
    },
    type: SET_POSTS,
  };
};
