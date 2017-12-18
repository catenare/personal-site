import {connect} from "react-redux";
import {getUsers} from "../actions";
import C from "../constants";
import Users from "../ui/users";

const UserList = connect (
  (state) => ({
    users: state.users,
  }),
  (dispatch) => ({
    fetchUsers() {
      dispatch(getUsers(C.URL));
    },
  }),
)(Users);

export default UserList;
