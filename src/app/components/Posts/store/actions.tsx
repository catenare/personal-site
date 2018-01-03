export const GET_POST = "GET POST";
export const GET_POSTS = "GET POSTS";
export const GET_FEATURED_POST = "GET_FEATURED_POST";
export const SET_FEATURED_POST = "SET_FEATURED_POST";
export const ADD_POSTS = "ADD_POSTS";
export const SET_POSTS = "SET_POSTS";

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

export const setPosts = (posts) => {
  return {
    payload: {
      loaded: true,
      posts,
    },
    type: SET_POSTS,
  };
};
