import axios from "axios";
import * as React from "react";
import User from "./User";

class Users extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const {loaded} = this.props.users;
    if (loaded) {
      const {users} = this.props.users;
      const UserList = users.map((user, i) => <User User={user} index={i} />);
      return (
        <React.Fragment>
          {UserList}
        </React.Fragment>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}

export default Users;
