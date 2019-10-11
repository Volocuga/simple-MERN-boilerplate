import axios from 'axios';
import { EXAMPLE_ERROR, EXAMPLE_REQUEST, EXAMPLE_RESPONSE } from '../types';

export const exampleSyncAction = payload => ({
  type: EXAMPLE_RESPONSE,
  payload,
});

export const exampleAsyncAction = query => dispatch => {
  dispatch({ type: EXAMPLE_REQUEST });

  axios
    .get(`/api/chat`)
    .then(({ data }) => dispatch({ type: EXAMPLE_RESPONSE, payload: data }))
    .catch(error => dispatch({ type: EXAMPLE_ERROR, payload: error }));
};
