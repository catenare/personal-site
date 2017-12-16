const sortBy = (type, field) => {
  switch (type) {
      case "date" :
          return (a, b) => new Date(b[field]).valueOf() - new Date(a[field]).valueOf();
      case "string" :
          return (a, b) => (a[field] < b[field]) ? -1 : 1;
      default:
          return (a, b) => b[field] - a[field];
  }
};

export const sortFunction = (sort) =>
  (sort === "SORTED_BY_TITLE") ?
      sortBy("string", "title") :
      (sort === "SORTED_BY_RATING") ?
          sortBy("number", "rating") :
          sortBy("date", "timestamp");
