import { createAction } from 'redux-actions'
import { URL_TYPE, METHOD, COMMAND } from '../constant/Const'

export const users = createAction("USERS", () => ({
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
