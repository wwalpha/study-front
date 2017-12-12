import { URL_TYPE, WEB_SITE, METHOD, COMMAND } from '../constant/Const';

const upload = store => next => (action) => {
  if (!['UPDATE_SETTINGS', 'UPLOAD'].includes(action.type)) {
    return next(action);
  }

  // Get params
  const { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } = action.payload.types;
  const { command, method, urlType, fileData } = action.payload;
  const { currUser, wordType } = store.getState().app;
  const newURL = [WEB_SITE];

  // start event
  next({ type: FETCH_REQUEST });

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

  const formData = new FormData();
  formData.append('file', fileData);

  return fetch(newURL.join('/'), {
    mode: 'cors',
    method,
    body: formData,
  })
  .then((res) => {
    if (res.status !== 200) {
      console.log(res);
      throw new Error();
    }

    store.dispatch({
      type: 'USERS',
      payload: {
        types: {
          FETCH_SUCCESS: 'USERS_SUCCESS',
          FETCH_FAILED: 'USERS_FAILED',
        },
        urlType: URL_TYPE.COMMON,
        command: COMMAND.USERS,
        method: METHOD.GET,
      },
    });

    return next({ type: FETCH_SUCCESS });
  })
  .catch((error) => {
    console.log(error);
    return next({ type: FETCH_FAILED });
  });
};

export default upload;
