import * as React from "react";
import User from "./user";

// class UsersList extends React.Component<any, any> {
//   public render (
//     return {

//     }
//   )
// }

const Users = (props) => {
  const {users} = props;
  if (users.fetching) {
    return (
      <h1>Fetching...</h1>
    );
  } else {
  const userList = users.users.map((u, i) => (<User user={u} index={i} />));
  return (
      <ul className="users">{userList}</ul>
    );
  }
};

export default Users;
