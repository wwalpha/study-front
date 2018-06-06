import { createAction } from 'redux-actions';
import { CALL_API } from 'redux-api-middleware';
import { USERS_URL, NEXT, SAVE, RESET } from 'src/constant/URLs';
import { METHOD } from 'src/constant/Const';
import {
  DUMMY_REQUEST, DUMMY_FAILED, RESET_SUCCESS, SAVE_SUCCESS,
  NEXT_SUCCESS, SELECT_USER, USERS_SUCCESS,
  PREV_PAGE, NEXT_PAGE, CHECKED, FAVORITE,
} from 'src/constant/ActionTypes';

export const users = () => ({
  [CALL_API]: {
    endpoint: USERS_URL,
    method: METHOD.GET,
    types: [
      { type: DUMMY_REQUEST },
      {
        type: USERS_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => payload),
      },
      { type: DUMMY_FAILED },
    ],
  },
});

export const selectUser = createAction(SELECT_USER, userId => userId);

export const prevPage = createAction(PREV_PAGE);

export const nextPage = createAction(NEXT_PAGE);

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

export const save = (userId, list) => ({
  [CALL_API]: {
    endpoint: SAVE(userId),
    method: METHOD.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(list.map(item => ({
      word: item.word,
      favorite: item.favorite,
      id: item.id,
    }))),
    types: [
      { type: DUMMY_REQUEST },
      {
        type: SAVE_SUCCESS,
      },
      { type: DUMMY_FAILED },
    ],
  },
});

export const reset = (userId, list) => ({
  [CALL_API]: {
    endpoint: RESET(userId),
    method: METHOD.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(list.map(item => ({
      id: item.id,
    }))),
    types: [
      { type: DUMMY_REQUEST },
      {
        type: RESET_SUCCESS,
      },
      { type: DUMMY_FAILED },
    ],
  },
});

export const selected = createAction(CHECKED, rowIndex => ({
  rowIndex,
}));

export const favorite = createAction(FAVORITE, rowIndex => ({
  rowIndex,
}));
