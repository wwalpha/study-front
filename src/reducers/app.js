import { handleActions } from 'redux-actions';
import { USERS_SUCCESS, USER_PROPS_SUCCESS } from 'src/constant/ActionTypes';
import App from 'src/models/App';

const app = handleActions({

  [USERS_SUCCESS]: (state, action) => state.setUsers(action.payload),

  [USER_PROPS_SUCCESS]: (state, action) => state.setUserProps(action.payload),

}, new App());

export default app;
