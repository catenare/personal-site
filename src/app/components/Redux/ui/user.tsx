import * as React from "react";

const User = (u) => {
  const {user, index} = u;
  return (
 <li>
    key: {index}
    Name: {user.name.first} {user.name.last}
    <img src={user.picture.medium} />
  </li>
 );
};

export default User;
