import {connect} from "react-redux";
import Users from "../Users";

const mapStateToProps = (state) => {
  return {
    loaded: state.loaded,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const UserList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default UserList;
