export const searchForAllKeys = (array, query) => {
  return array.filter((object) => {
    return Object.values(object)
      .some((value) => {
        return value
          .toLowerCase()
          .match(query.toLowerCase());
      })
  });
};
