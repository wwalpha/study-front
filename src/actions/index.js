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

export const download = createAction("DOWNLOAD", (user) => ({
  host: WEB_SITE,
  command: 'download',
  method: "GET",
  headers: {},
  body: {},
}));
