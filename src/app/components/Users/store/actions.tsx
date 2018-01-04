import axios from "axios";
export const GET_USERS = "GET USERS";
export const SET_USERS = "SET USERS";
export const USERS_PENDING = "USERS_PENDING";
export const USERS_FULFILLED = "USERS_FULFILLED";
export const USERS_REJECTED = "USERS_REJECTED";

export const setUsers = (users) => ({
  payload: {
    loaded: true,
    users,
  },
  type: SET_USERS,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const getAllUsers = (url) => ({
  payload: axios(url),
  type: "USERS",
});
