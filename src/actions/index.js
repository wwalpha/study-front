import { createAction } from 'redux-actions'

const WEB_SITE = 'http://localhost:8080/studysite'
// const WEB_SITE = '.'

export const users = createAction("USERS", () => ({
  host: WEB_SITE + "/users",
  method: "GET",
  headers: {},
  body: {},
}));

export const next = createAction("NEXT_PAGE", () => ({
  host: WEB_SITE,
  command: 'nextpage',
  method: "GET",
  headers: {},
  body: {},
}));

export const switchType = createAction("SWITCH_TYPE", (wordType) => ({
  wordType,
}));

export const prev = createAction("PREV_PAGE");

export const switchs = createAction("SWITCH");

export const save = createAction("SAVE", (words) => {
  const body = [];

  words.forEach(e => body.push({
    word: e.word,
    checked: e.checked,
    favorite: e.favorite,
  }));
  
  return {
    host: WEB_SITE,
    command: 'save',
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }
});

export const onCheck = createAction("CHECKED", (word) => ({
  word,
}));

export const favorite = createAction("FAVORITE", (word) => ({
  word,
}));

export const download = createAction("DOWNLOAD", () => ({
  host: WEB_SITE,
  command: 'download',
  method: "GET",
  headers: {},
  body: {},
}));

export const updateSettings = createAction("UPDATE_SETTINGS", (file) => ({
  types: {
    FETCH_REQUEST: 'UPDATE_SETTINGS_REQUEST',
    FETCH_SUCCESS: 'UPDATE_SETTINGS_SUCCESS',
    FETCH_FAILED: 'UPDATE_SETTINGS_FAILED',
  },
  host: WEB_SITE,
  command: 'settings',
  fileData: file,
}));

export const userChange = createAction("USER_CHANGE", (index) => ({
  index,
}));

export const playlist = createAction("PLAYLIST", (file) => ({
  types: {
    FETCH_REQUEST: 'PLAYLIST_REQUEST',
    FETCH_SUCCESS: 'PLAYLIST_SUCCESS',
    FETCH_FAILED: 'PLAYLIST_FAILED',
  },
  host: WEB_SITE,
  command: 'playlist',
}));