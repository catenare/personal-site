import v4 from "uuid/v4";
import C from "./constants";

export const removeColor = (id) =>
  ({
    id,
    type: C.REMOVE_COLOR,
  });

export const rateColor = (id, rating) =>
  (
    {
      id,
      rating,
      type: C.RATE_COLOR,
    }
  );

export const sortColors = (sortBy) => (
  {
    sortBy,
    type: "SORT_COLORS",
  }
);

export const addColor = (title, color) =>
    ({
      color,
      id: v4(),
      timestamp: new Date().toString(),
      title,
      type: C.ADD_COLOR,
    });
