export default (err, items) => async dispatch => {
  const payload = {};
  for (const item of items) {
    payload[item[0]] = item[1];
  }

  dispatch({
    type: 'INITIAL_STATE_UPDATED',
    payload
  });
};
