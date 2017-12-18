import axios from "axios";
import v4 from "uuid/v4";
import {C} from "./reducers";

export const removeColor = (id) => (
  {
    payload: {id},
    type: C.REMOVE_COLOR,
  }
);

export const rateColor = (id, rating) => (
  {
    payload: {id, rating},
    type: C.RATE_COLOR,
  }
);

export const sortColors = (sortedBy) =>
  (sortedBy === "rating") ? ({
    payload: {
      sortBy: "SORTED_BY_RATING",
    },
    type: C.SORT_COLORS,
  }) :
  (sortedBy === "title") ?
  ({
    payload: {
      sortBy: "SORTED_BY_TITLE",
    },
    type: C.SORT_COLORS,
  }) :
  ({
    payload: {
      sortBy: "SORTED_BY_DATE",
    },
  });

export const addColor = (title, color) => (
  {
    payload: {
      color,
      id: v4(),
      timestamp: new Date().toString(),
      title,
    },
    type: C.ADD_COLOR,
  }
);

export const getUsers = (url) => (
  {
    payload: axios.get(url),
    type: "POSTS",
  }
);

export const setUser = (id) => (
  {
    payload: {
      id,
    },
    type: C.SET_USER,
  }
);
