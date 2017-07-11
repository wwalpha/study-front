import { URL_TYPE, WEB_SITE, METHOD } from '../constant/Const';

const api = store => next => (action) => {
  if (['SWITCH_TYPE'].includes(action.type)) {
    next({
      type: 'CLEAR_WORDS',
    });
  }

  if (!['NEXT_PAGE', 'SAVE', 'USERS', 'DOWNLOAD', 'PLAYLIST', 'USER_CHANGED'].includes(action.type)) {
    return next(action);
  }

  let FETCH_REQUEST;
  let FETCH_SUCCESS = action.type;
  let FETCH_FAILED = 'EXCEPTION';

  if (action.payload.types !== undefined) {
    FETCH_REQUEST = action.payload.types.FETCH_REQUEST;
    FETCH_SUCCESS = action.payload.types.FETCH_SUCCESS;
    FETCH_FAILED = action.payload.types.FETCH_FAILED;
  }

  // before
  if (FETCH_REQUEST !== undefined) {
    next({ type: FETCH_REQUEST, payload: action.payload });
  }

  // Get params
  const { command, method, urlType } = action.payload;
  const { currUser, wordType, ctgValues } = store.getState().app;
  const newURL = [WEB_SITE];

  if (action.type !== 'USERS' && currUser === '') {
    alert("ユーザ選択してから操作ください");
    return next(action);
  }

  const headers = { 'Content-Type': 'application/json' };

  let urlParams = {
    mode: 'cors',
    method,
    headers: Object.assign({}, headers, action.payload.headers),
  };

  if (action.payload.method === METHOD.POST) {
    urlParams = Object.assign({}, urlParams, { body: action.payload.body });
  }

  switch (urlType) {
    case URL_TYPE.USER_COMMON:
      newURL.push(currUser);
      newURL.push(command);
      break;
    case URL_TYPE.USER_TYPE:
      newURL.push(currUser);
      newURL.push(wordType);
      newURL.push(command);
      break;
    case URL_TYPE.COMMON:
      newURL.push(command);
      break;
    default:
      newURL.push(command);
      break;
  }

  let url = newURL.join('/');

  if (ctgValues !== undefined) {
    url = url + "?categories=" + ctgValues.join(',');
  }

  return fetch(url, urlParams)
  .then((res) => {
    if (res.status !== 200) {
      console.log(res);
      throw new Error();
    }

    return res.json();
  })
  .then((datas) => {
    next({
      type: FETCH_SUCCESS,
      payload: {
        datas,
      },
    });
  })
  .catch((e) => {
    console.log(e);
    return next({ type: FETCH_FAILED });
  });
};

export default api;
