export const detectStyle = (value) => {
  if (value === "default") {
    return "grey";
  }
  if (value === "failed") {
    return "red";
  }
  if (value === "improve") {
    return "yellow";
  }
  if (value === "done") {
    return "green";
  }
};
