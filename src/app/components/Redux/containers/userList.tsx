import {connect} from "react-redux";
import {getUsers, setUser} from "../actions";
import C from "../constants";
import profile from "../ui/profile";
import Users from "../ui/users";

const UserList = connect (
  (state) => ({
    users: state.users,
  }),
  (dispatch) => ({
    fetchUsers() {
      dispatch(getUsers(C.URL));
    },
    setUser(id) {
      dispatch(setUser(id));
    },
  }),
)(Users);

export const ProfileUser = connect (
  (state) => ({
    users: state.users,
  }),
)(profile);

export default UserList;
