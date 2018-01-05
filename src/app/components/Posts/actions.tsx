
export const GET_POSTS = "GET POSTS";  // set the posts in the store
export const SET_POSTS = "SET POSTS"; // retrieve the set of posts
export const GET_FEATURE_POST = "GET FEATURE POST"; // get the featured post
export const SET_FEATURE_POST = "SET FEATURE POST"; // set the featured post
export const GET_POST = "GET POST"; // get post to show detail
export const SET_PAGE_COUNT = "SET PAGE COUNT"; // set number of pages in total set
export const GET_PAGE_COUNT = "GET PAGE COUNT"; // get the number of pages in total set
export const SET_CURRENT_PAGE = "SET CURRENT PAGE"; // set the current page we are showing
export const GET_CURRENT_PAGE = "GET CURRENT PAGE"; // get the current page we are showing so we can see the next one.

export function getPosts() {
  return {
    count: 10,
    type: GET_POSTS,
    url: "http://paseo.demo/wp-json/wp/v2/posts?_embed",
  };
}

export function setPosts(posts) {
  return {
    payload: {
      posts,
    },
    type: SET_POSTS,
  };
}

export function setFeaturePost(post) {
  return {
    payload: {
      post,
    },
    type: SET_FEATURE_POST,
  };
}

export function getFeaturePost(id) {
  return {
    payload: {
      id,
    },
    type: GET_FEATURE_POST,
  };
}

export function getPost(id) {
  return {
    payload: {
      id,
    },
    type: GET_POST,
  };
}

export function setPageCount(total) {
  return {
    payload: {
      total,
    },
    type: SET_PAGE_COUNT,
  };
}

export function getPageCount() {
  return {
    type: GET_PAGE_COUNT,
  };
}

export function setCurrentPage(page) {
  return {
    payload: {
      page,
    },
    type: SET_CURRENT_PAGE,
  };
}

export function getCurrentPage() {
  return {
    type: GET_CURRENT_PAGE,
  };
}
