import * as React from "react";

const Profile = (props) => {
  const users = props.users.users;
  if (props.users.fetched && (props.users.profile !== null)) {
    const profile = props.users.profile;
    const user = users[profile];
    return (
    <div className="modal">
        <h4>Profile</h4>
        <div className="avatar">
          <img src={user.picture.large}/>
        </div>
        <div className="profile">
          <h3 className="profile__name">{user.name.first} {user.name.last}</h3>
          <a href="#" className="profile__email">{user.email}</a>
          <button>Follow</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ab tenetur, fugit quaerat architecto
            perspiciatis est ducimus sit sapiente ipsum aliquam
             laboriosam repellendus vitae asperiores, ipsa labore similique aliquid aperiam quasi?</p>
        </div>
    </div>
  );
} else {
  return (
    <div className="modal">
      <h4>Loading...</h4>
    </div>
  );
}
};

export default Profile;
