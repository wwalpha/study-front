import fetch from 'isomorphic-fetch';
import { URL_TYPE, WEB_SITE, METHOD } from '../constant/Const'

const api = store => next => action => {
  if (["SWITCH_TYPE"].includes(action.type)) {
    next({
      type: "CLEAR_WORDS",
    });
  }

  if (!["NEXT_PAGE", "SAVE", "USERS", "DOWNLOAD", "PLAYLIST"].includes(action.type)) {
    return next(action);
  }

  let FETCH_REQUEST = undefined;
  let FETCH_SUCCESS = action.type;
  let FETCH_FAILED = 'EXCEPTION';

  if (action.payload.types !== undefined) {
    FETCH_REQUEST = action.payload.types.FETCH_REQUEST;
    FETCH_SUCCESS = action.payload.types.FETCH_SUCCESS;
    FETCH_FAILED = action.payload.types.FETCH_FAILED;
  }

  // before 
  if (FETCH_REQUEST !== undefined) {
    next({ type: FETCH_REQUEST });
  }

  // Get params
  const { command, method, urlType } = action.payload;
  const { currUser, wordType } = store.getState().app;
  const newURL = [WEB_SITE];

  let headers = {};
  let body = {};

  switch(urlType) {
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

  if (action.payload.method === METHOD.POST) {
    headers =  action.payload.headers;
    body = action.payload.body;
  }

  fetch(newURL.join('/'), {
    mode: 'cors',
    method,
    headers,
    body,
  })
  .then(res => {
    if (res.status !== 200) {
      console.log(res);
      throw new Error();
    }
    
    return res.json();
  })
  .then(datas => {
    next({
      type: FETCH_SUCCESS,
      payload: {
        datas,
      }
    });
  })
  .catch((e) => {
    console.log(e);
    return next({ type: FETCH_FAILED });
  }); 
}

export default api;