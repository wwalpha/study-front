import { WEB_SITE, METHOD, COMMAND_CALC } from '../constant/Const';
import * as actions from 'root/actions/calc';

const calcAPI = store => next => (action) => {
  if (['CALC_START'].includes(action.type)) {
    store.dispatch(actions.next());

    return next(action);
  }

  if (!['ANSWER', 'NEXT', 'CALC_SCORE'].includes(action.type)) {
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

  let command = action.payload.command;
  const method = action.payload.method;

  if (action.type === 'NEXT') {
    const operator = store.getState().calc.operator;

    if (operator === '+') {
      command = COMMAND_CALC.ADD_SINGLE;
    }

    if (operator === '-') {
      command = COMMAND_CALC.MINUS_SINGLE;
    }
  }

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
        // no content
    if (res.status === 204) {
      if (['ANSWER'].includes(action.type)) {
        return store.dispatch(actions.next());
      }

      return next(action);
    }
    
    if (res.status === 200) {
      return res.json();
    }
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

export default calcAPI;
