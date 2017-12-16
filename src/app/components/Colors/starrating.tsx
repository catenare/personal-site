import * as React from "react";
import {Star} from "./star";

import "./styles/Star.scss";

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
