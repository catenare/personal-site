import * as React from "react";
import C from "./constants";
import UserList, {ProfileUser} from "./containers/userList";

// import "./styles/devices.min.css";
// import "./styles/style.scss";

const List = () => (
  <UserList />
);

export const Profile = () => (
  <ProfileUser />
);

export default List;
