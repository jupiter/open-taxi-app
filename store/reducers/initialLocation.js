export default (state = null, action) => {
  if (action.type === 'INITIAL_LOCATION_UPDATED') {
      state = action.payload;
  }
  return state;
};
