export const API = "API";
export const SET_PAGES = "SET PAGES";
export const FETCH_PAGES = "FETCH PAGES";
export const GET_PAGES = "GET PAGES";
export const PAGES_PENDING = "PAGES PENDING";

export const PAGE_URL = "wp-json/wp/v2/pages?_embed";

export const setPages = (pages) => ({
  payload: {
    pages,
  },
  type: SET_PAGES,
});

export const getPages = (url) => {
  return {
    payload: {
    success: (pages) => setPages(pages),
    url: url + PAGE_URL,
    },
    type: API,
  };
};
