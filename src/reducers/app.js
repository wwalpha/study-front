import { handleActions } from 'redux-actions';
import {
  USERS_SUCCESS, USER_PROPS_SUCCESS, NEXT_SUCCESS, SAVE_SUCCESS,
  PREV_PAGE, NEXT_PAGE, CHECKED, FAVORITE,
} from 'src/constant/ActionTypes';
import App from 'src/models/App';

const app = handleActions({

  [USERS_SUCCESS]: (state, action) => state.setUsers(action.payload),

  [USER_PROPS_SUCCESS]: (state, action) => state.setUserProps(action.payload),

  [NEXT_SUCCESS]: (state, action) => state.addWords(action.payload),

  [SAVE_SUCCESS]: (state, action) => state.save(action.payload),

  [PREV_PAGE]: state => state.prevPage(),

  [NEXT_PAGE]: state => state.nextPage(),

  [CHECKED]: (state, action) => state.setSelected(action.payload.rowIndex),

  [FAVORITE]: (state, action) => state.setFavorite(action.payload.rowIndex),

}, new App());

export default app;
