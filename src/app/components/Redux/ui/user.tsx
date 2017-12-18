import * as React from "react";

const User = (u) => {
  const user = u.user;
  const index = u.index;
  const profile = () => u.setProfile(index);
  return (
 <li onClick={profile}>
    <img src={user.picture.medium} />
    <span className="user-name">{user.name.first}</span>
  </li>
 );
};

export default User;
