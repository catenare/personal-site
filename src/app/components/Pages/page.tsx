import * as React from "react";

const page = (props) => {
  const {Page} = props;
  // console.log("Page:", Page.title.rendered);
  return (
  <div className="grid-x grid-padding-x">
    <h2>{Page.title.rendered}</h2>
    <div className="medium-2 medium-offset-3 cell text-center">
      <img src={Page.featured_media} alt={Page.title.rendered} className="rounded"/>
      <a href="#" className="button success rounded hollow margin-top-1">Select</a>
    </div>
    <p dangerouslySetInnerHTML={{__html: Page.excerpt.rendered}} />
    {/* <div className="medium-7 cell">
      <ul className="no-bullet">
        <li className="text-capitalize">{User.name.first} {User.name.last}</li>
        <li className="text-capitalize">{User.location.street}</li>
        <li className="text-capitalize">{User.location.city} {User.location.state}, {User.location.postcode}</li>
        <li><span><i className="fa fa-envelope"></i></span>{User.email}</li>
        <li><span><i className="fa fa-phone"></i></span>{User.phone}</li>
        <li><span><i className="fa fa-mobile"></i></span>{User.cell}</li>
        <li><img src="../img/map_img.png" alt="Map Image" width="50%"/></li>
      </ul>
    </div> */}
  </div>
  );
};

export default page;
