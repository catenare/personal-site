import axios from "axios";
import * as React from "react";
import * as actions from "./store/actions";
import User from "./User";

class Users extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    const siteUrl = this.props.url;
    axios.get(siteUrl)
      .then( (response) => {
        this.props.dispatch(actions.setUsers(response.data.results));
      } )
      .catch((e) => console.log("error", e));
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
