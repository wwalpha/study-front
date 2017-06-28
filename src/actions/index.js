import { createAction } from 'redux-actions'
import { URL_TYPE, METHOD, COMMAND } from '../constant/Const'

export const users = createAction("USERS", () => ({
  types: {
    FETCH_SUCCESS: 'USERS_SUCCESS',
    FETCH_FAILED: 'USERS_FAILED',
  },
  urlType: URL_TYPE.COMMON,
  command: COMMAND.USERS,
  method: METHOD.GET,
}));

export const onCheck = createAction("CHECKED", (word) => ({
  word,
}));

export const favorite = createAction("FAVORITE", (word) => ({
  word,
}));
