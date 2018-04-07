import { handleActions } from 'redux-actions';
import { USERS_SUCCESS, USER_PROPS_SUCCESS, NEXT_SUCCESS, PREV_PAGE } from 'src/constant/ActionTypes';
import App from 'src/models/App';

const app = handleActions({

  [USERS_SUCCESS]: (state, action) => state.setUsers(action.payload),

  [USER_PROPS_SUCCESS]: (state, action) => state.setUserProps(action.payload),

  [NEXT_SUCCESS]: (state, action) => state.addWords(action.payload),

  [PREV_PAGE]: state => state.prevPage(),

}, new App());

export default app;
