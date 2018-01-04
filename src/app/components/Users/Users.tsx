import axios from "axios";
import * as React from "react";
import * as actions from "./store/actions";
import User from "./User";

class Users extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.props.dispatch(actions.getAllUsers(this.props.url));
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
