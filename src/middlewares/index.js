export const logActions = (store) => (next) => (actionInfo) => {
  console.log("dispatch:", actionInfo);
  next(actionInfo);
};
