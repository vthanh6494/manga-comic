export const reduceTitle = (title) => {
  if (title.length > 30) {
    return title.slice(0, 30) + '...'
  }
  return title
};
