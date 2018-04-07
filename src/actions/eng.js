import { createAction } from 'redux-actions';
import { CALL_API } from 'redux-api-middleware';
import { USERS_URL, USER_PROPS_URL, NEXT, SAVE } from 'src/constant/URLs';
import { METHOD } from 'src/constant/Const';
import {
  DUMMY_REQUEST, DUMMY_FAILED,
  NEXT_SUCCESS, USER_PROPS_SUCCESS, USERS_SUCCESS, SAVE_SUCCESS,
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

export const save = (words, user, mode) => ({
  [CALL_API]: {
    endpoint: SAVE(user)(mode),
    method: METHOD.POST,
    headers: {
      ContentType: 'application/json',
    },
    body: JSON.stringify(words.map(item => ({
      word: item.word,
      checked: item.checked,
      favorite: item.favorite,
      category: item.category,
    }))),
    types: [
      { type: DUMMY_REQUEST },
      {
        type: SAVE_SUCCESS,
        payload: (action, state, res) => res.json().then(payload => payload),
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
