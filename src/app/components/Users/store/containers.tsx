import {connect} from "react-redux";
import Users from "../Users";

const UserList = connect(
  (state) => {
    return {
      users: state.users,
    };
  },
  null,
)(Users);

export default UserList;
