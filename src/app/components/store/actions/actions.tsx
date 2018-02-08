
import store from "../../store/store";
import * as C from "../constants";

export const setPages = (pages) => ({
  payload: {
    pages,
  },
  type: C.SET_PAGES,
});

export const getAllPages = (url) => {
  return {
    payload: {
    success: (pages) => setPages(pages),
    url: url + C.PAGE_URL,
    },
    type: C.API,
  };
};

export const getPosts = () => {
  return {
    type: C.GET_POSTS,
  };
};

export const getAllPosts = (url) => {
  return {
    payload: {
      success: (posts) => setPosts(posts),
      url: url + C.POST_URL,
    },
    type: C.API,
  };
};

export const setPosts = (posts) => {
  return {
    payload: {
      loaded: true,
      posts,
    },
    type: C.SET_POSTS,
  };
};

export const setPost = (post) => {
  return {
    payload: {
      loaded: true,
      post,
    },
    type: C.SET_POST,
  };
};

export const getPost = (url, id) => {
  return {
    payload: {
      success: (post) => setPost(post),
      url: url + C.GET_POST_URL + "/" + id + "?_embed",
    },
    type: C.API,
  };
};

export const setError = (e) => {
  return {
    payload: {
      error: e,
      loaded: true,
      loading: false,
    },
    type: C.POSTS_REJECTED,
  };
};

export const setUsers = (users) => ({
  payload: {
    loaded: true,
    users,
  },
  type: C.SET_USERS,
});

export const getUsers = () => ({
  type: C.GET_USERS,
});

export const getAllUsers = (url) => ({
  payload: {
    success: (users) => setUsers(users),
    url: url + C.USERS_URL,
  },
  type: C.API,
});

export const setCaptcha = (captchaKey) => ({
  payload: {
    captcha: captchaKey,
  },
  type: C.SET_CAPTCHA,
});

export const getCaptcha = () => ({
  type: C.GET_CAPTCHA,
});
