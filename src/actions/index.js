import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND } from '../constant/Const';

export const users = createAction('USERS', () => ({
  types: {
    FETCH_SUCCESS: 'USERS_SUCCESS',
    FETCH_FAILED: 'USERS_FAILED',
  },
  urlType: URL_TYPE.COMMON,
  command: COMMAND.USERS,
  method: METHOD.GET,
}));

export const userProps = createAction('USER_PROPS', () => ({
  types: {
    FETCH_REQUEST: 'USER_PROPS_REQUEST',
    FETCH_SUCCESS: 'USER_PROPS_SUCCESS',
    FETCH_FAILED: 'USER_PROPS_FAILED',
  },
  urlType: URL_TYPE.USER_COMMON,
  command: COMMAND.USER_PROPS,
  method: METHOD.GET,
}));

export const onCheck = createAction('CHECKED', word => ({
  word,
}));

export const favorite = createAction('FAVORITE', word => ({
  word,
}));
