import { CALL_API } from 'redux-api-middleware';
import { USERS_URL, USER_PROPS_URL, NEXT } from 'src/constant/URLs';
import { METHOD } from 'src/constant/Const';
import {
  NEXT_REQUEST, NEXT_SUCCESS, NEXT_FAILED,
  USERS_REQUEST, USERS_SUCCESS, USERS_FAILED,
} from 'src/constant/ActionTypes';

export const users = () => ({
  [CALL_API]: {
    endpoint: USERS_URL,
    method: METHOD.GET,
    types: [
      { type: USERS_REQUEST },
      {
        type: USERS_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => payload),
      },
      { type: USERS_FAILED },
    ],
  },
});

export const userProps = () => ({
  [CALL_API]: {
    endpoint: USER_PROPS_URL,
    method: METHOD.GET,
    types: ['USER_PROPS_REQUEST', 'USER_PROPS_SUCCESS', 'USER_PROPS_FAILED'],
  },
});

export const next = (user, mode) => ({
  [CALL_API]: {
    endpoint: NEXT(user)(mode),
    method: METHOD.GET,
    types: [
      { type: NEXT_REQUEST },
      {
        type: NEXT_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => payload),
      },
      { type: NEXT_FAILED },
    ],
  },
});
