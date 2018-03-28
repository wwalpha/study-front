import { handleActions } from 'redux-actions';
import { USERS_REQUEST, USERS_SUCCESS, USERS_FAILED } from 'src/constant/ActionTypes';
import App from 'src/models/App';

const app = handleActions({

  [USERS_REQUEST]: state => state,
  [USERS_SUCCESS]: (state, action) => state.setUsers(action.payload),
  [USERS_FAILED]: state => state,


}, new App());

export default app;
