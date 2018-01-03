export const GET_USERS = "GET USERS";
export const SET_USERS = "SET USERS";

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
