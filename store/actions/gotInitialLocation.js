export default (position) => async dispatch => {
  dispatch({
    type: 'INITIAL_LOCATION_UPDATED',
    payload: position
  });
};
