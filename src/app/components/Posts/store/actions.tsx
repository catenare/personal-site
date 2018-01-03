export const GET_POST = "GET POST";
export const GET_POSTS = "GET POSTS";
export const GET_FEATURED_POST = "GET_FEATURED_POST";
export const SET_FEATURED_POST = "SET_FEATURED_POST";
export const ADD_POSTS = "ADD_POSTS";
export const SET_POSTS = "SET_POSTS";

export function getPost(id) {
  return {
    payload: {
      id,
    },
    type: GET_POST,
  };
}

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function getFeaturedPost() {
  return {
    type: GET_FEATURED_POST,
  };
}

export function setFeaturedPost(post) {
  return {
    payload: {
      loaded: true,
      post},
    type: SET_FEATURED_POST,
  };
}

export function setPosts(posts) {
  return {
    payload: {
      loaded: true,
      posts,
    },
    type: SET_POSTS,
  };
}
