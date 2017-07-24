import { WEB_SITE, METHOD } from '../constant/Const';
import * as actions from 'root/actions/calc';

const calcAPI = store => next => (action) => {
  if (['CALC_START'].includes(action.type)) {
    store.dispatch(actions.addNext());

    return next(action);
  }

  if (!['ANSWER', 'ADD_NEXT'].includes(action.type)) {
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
  const { command, method } = action.payload;
  const newURL = [WEB_SITE];
  newURL.push(command);

  const headers = { 'Content-Type': 'application/json' };

  let urlParams = {
    mode: 'cors',
    method,
    headers: Object.assign({}, headers, action.payload.headers),
  };

  if (action.payload.method === METHOD.POST) {
    urlParams = Object.assign({}, urlParams, { body: action.payload.body });
  }

  let url = newURL.join('/');

  return fetch(url, urlParams)
  .then((res) => {

    console.log(res.status);
    // no content
    if (res.status === 204) {
      if (['ANSWER'].includes(action.type)) {
        return store.dispatch(actions.addNext());
      }

      return next(action);
    }

    if (res.status === 200) {
      return res.json();
    }

    next(action);
  })
  .then((datas) => {

    // if (['ANSWER'].includes(action.type)) {
    //   store.dispatch(actions.addNext());
    // }

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

export default calcAPI;
