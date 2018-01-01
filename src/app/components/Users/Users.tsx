import axios from "axios";
import * as React from "react";
import User from "./User";

class Users extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      users: [],
    };
    this.getUsers = this.getUsers.bind(this);
  }

  public getUsers() {
    axios.get(this.props.url)
      .then((response) => {
        this.setState({users: response.data.results});
        this.setState({loaded: true});
      }).catch( (e) => console.log("error", e));
  }

  public componentWillMount() {
    this.getUsers();
  }

  public render() {
    const loaded = this.state.loaded;
    if (loaded) {
      const users = this.state.users;
      const UserList = users.map((user,i) => <User User={user} index={i} />);
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
