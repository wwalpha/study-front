import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND } from '../constant/Const';

export const switchType = createAction('SWITCH_TYPE', wordType => ({
  wordType,
}));

/** prev page */
export const prev = createAction('PREV_PAGE');

/** next page */
export const next = createAction('NEXT_PAGE', () => ({
  urlType: URL_TYPE.USER_TYPE,
  command: COMMAND.NEXT_PAGE,
  method: METHOD.GET,
}));

/** visible / unvisible */
export const switchs = createAction('SWITCH');

/** save status */
export const save = createAction('SAVE', (words) => {
  const body = [];

  words.forEach(e => body.push({
    word: e.word,
    checked: e.checked,
    favorite: e.favorite,
    category: e.category,
  }));

  return {
    urlType: URL_TYPE.USER_TYPE,
    command: COMMAND.SAVE,
    method: METHOD.POST,
    headers: {
      Accept: 'application/json, text/plain, */*',
      ContentType: 'application/json',
    },
    body: JSON.stringify(body),
  };
});

/** word db file download */
export const download = createAction('DOWNLOAD', () => ({
  urlType: URL_TYPE.USER_COMMON,
  command: COMMAND.DOWNLOAD,
  method: METHOD.GET,
}));

/** Upload action */
export const upload = createAction('UPLOAD', file => ({
  types: {
    FETCH_REQUEST: 'UPLOAD_REQUEST',
    FETCH_SUCCESS: 'UPLOAD_SUCCESS',
    FETCH_FAILED: 'UPLOAD_FAILED',
  },
  urlType: URL_TYPE.USER_COMMON,
  command: COMMAND.UPLOAD,
  method: METHOD.POST,
  fileData: file,
}));

/** playlist */
export const playlist = createAction('PLAYLIST', () => ({
  types: {
    FETCH_REQUEST: 'PLAYLIST_REQUEST',
    FETCH_SUCCESS: 'PLAYLIST_SUCCESS',
    FETCH_FAILED: 'PLAYLIST_FAILED',
  },
  urlType: URL_TYPE.USER_COMMON,
  command: COMMAND.PLAYLIST,
  method: METHOD.GET,
}));

/** Upload action */
export const updateSettings = createAction('UPDATE_SETTINGS', file => ({
  types: {
    FETCH_REQUEST: 'UPDATE_SETTINGS_REQUEST',
    FETCH_SUCCESS: 'UPDATE_SETTINGS_SUCCESS',
    FETCH_FAILED: 'UPDATE_SETTINGS_FAILED',
  },
  urlType: URL_TYPE.COMMON,
  command: COMMAND.SETTINGS,
  method: METHOD.POST,
  fileData: file,
}));

export const userChanged = createAction('USER_CHANGED', (index) => ({
  types: {
    FETCH_REQUEST: 'USER_PROPS_REQUEST',
    FETCH_SUCCESS: 'USER_PROPS_SUCCESS',
    FETCH_FAILED: 'USER_PROPS_FAILED',
  },
  urlType: URL_TYPE.USER_COMMON,
  command: COMMAND.USER_PROPS,
  method: METHOD.GET,
  index,
}));

export const ctgChanged = createAction('CTG_CHANGED', values => ({
  values,
}));
