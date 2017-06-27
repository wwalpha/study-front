import fetch from 'isomorphic-fetch';

const upload = store => next => action => {
  if (!["UPDATE_SETTINGS"].includes(action.type)) {
    return next(action);
  }

  // Get params
  const { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } = action.payload.types;
  const { host, command, fileData } = action.payload;

  // start event
  next({ type: FETCH_REQUEST});

  const newURL = [host, command].join('/');

  let formData = new FormData();
  formData.append('file', fileData);

  fetch(newURL, {
    mode: 'cors',
    method: 'POST',
    body: formData,
  })
  .then(res => {
    if (res.status !== 200) {
      console.log(res);
      throw new Error();
    }
    
    store.dispatch({
      type: 'USERS',
      payload:{
        host: host + "/users",
        method: 'GET',
        headers: {},
        body: {},
      }
    });

    return next({ type: FETCH_SUCCESS });
  })
  .catch((error) => {
    console.log(error);
    return next({ type: FETCH_FAILED});
  });
}

export default upload;