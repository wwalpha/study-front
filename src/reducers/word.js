import { handleActions } from 'redux-actions';
import { USERS_SUCCESS, USER_PROPS_SUCCESS } from 'src/constant/ActionTypes';

import Word from 'src/models/Word';

const word = handleActions({


}, new Word());

export default word;
