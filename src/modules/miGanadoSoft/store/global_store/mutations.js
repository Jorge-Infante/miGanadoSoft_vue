export const setState = (state, { nameState, module, value, key }) => {
  console.log(nameState, module, value, key, "y el state: ", state);
  module[nameState] = value;
};
export const removeState = (state, { key, keySearch, value }) => {
  state[key] = state[key].filter((item) => item[keySearch] !== value);
};
export const addEnty = (state, { key, value }) => {
  state[key] = [value, ...state[key]];
};
export const updateState = (state, { key, keySearch, value }) => {
  console.log(key, keySearch, value);
  let index = state[key].findIndex((item) => item[keySearch] === value);
  console.log("INDEX: ", index);
  state[key][index] = value;
};
