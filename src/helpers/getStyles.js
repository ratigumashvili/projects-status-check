export const detectStyle = (value) => {
  if (value.default) {
    return "grey";
  }
  if (value.check) {
    return "red";
  }
  if (value.improve) {
    return "yellow";
  }
  if (value.complete) {
    return "green";
  }
};
