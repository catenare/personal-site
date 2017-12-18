import * as React from "react";
import User from "./user";

class UsersList extends React.Component<any, any> {

  public componentWillMount() {
    this.props.fetchUsers();
  }

  public render() {
    const setClick = (index) => this.props.setUser(index);
    // const setClick = (index) => console.log(index);
    const {users} = this.props;
    if (users.fetching) {
      return (
        <h1 className="loader">Fetching...</h1>
      );
    } else {
    const userList = users.users.map((u, i) => (<User user={u} index={i} setProfile={setClick} />));
    return (
        <section>
          <h3 className="title">Results</h3>
          <ul className="users show">{userList}</ul>
        </section>
      );
    }
  }
}

export default UsersList;
