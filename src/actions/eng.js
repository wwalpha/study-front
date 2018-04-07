import { CALL_API } from 'redux-api-middleware';
import { USERS_URL, USER_PROPS_URL, NEXT } from 'src/constant/URLs';
import { METHOD } from 'src/constant/Const';
import {
  DUMMY_REQUEST, DUMMY_FAILED,
  NEXT_SUCCESS,
  USERS_REQUEST, USERS_SUCCESS, USERS_FAILED,
  USER_PROPS_SUCCESS,
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

export const userProps = user => ({
  [CALL_API]: {
    endpoint: USER_PROPS_URL(user),
    method: METHOD.GET,
    types: [
      { type: DUMMY_REQUEST },
      {
        type: USER_PROPS_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => ({
          ...payload,
          user,
        })),
      },
      { type: DUMMY_FAILED },
    ],
  },
});

export const next = (user, mode) => ({
  [CALL_API]: {
    endpoint: NEXT(user)(mode),
    method: METHOD.GET,
    types: [
      { type: DUMMY_REQUEST },
      {
        type: NEXT_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => payload),
      },
      { type: DUMMY_FAILED },
    ],
  },
});
