import * as React from "react";
import {Star} from "./star";

import "./styles/Star.scss";

// class StarRating extends React.Component<any, any> {

//   public static defaultProps: any = {
//     totalStars: 5,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       starsSelected: 0,
//     };
//     this.change = this.change.bind(this);
//   }

//   public change(starsSelected) {
//     this.setState({starsSelected});
//   }

//   public render() {
//     const {totalStars} = this.props;
//     const {starsSelected} = this.state;
//     return (
//       <div className="star-rating">
//         {[...Array(totalStars)].map((n, i) =>
//           <Star key={i} selected={i < starsSelected} onClick={() => this.change(i + 1)}/>,
//          )}
//          <p>{starsSelected} of {totalStars} stars</p>
//       </div>
//     );
//   }
// }

const StarRating = ({starsSelected = 1, totalStars = 5, onRate = (f) => f}) =>
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) =>
    <Star key={i}
      selected={i < starsSelected}
      onClick={() => onRate(i + 1)}/>,
  )}
  <p>{starsSelected} of {totalStars} stars</p>
  </div>;

export {StarRating};
