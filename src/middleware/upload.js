import fetch from 'isomorphic-fetch';

const upload = store => next => action => {
  if (!["UPDATE_SETTINGS"].includes(action.type)) {
    return next(action);
  }

  // Get params
  const { host, command, fileData } = action.payload;
  const { currUser } = store.getState().app;

  const newURL = [host, currUser, command].join('/');

  let formData = new FormData();
  formData.append('file', fileData);

  fetch(newURL, {
    mode: 'no-cors',
    method: 'POST',
    body: formData,
  })
  .then(res => {
    if (res.status !== 200) {
      return next({type: 'EXCEPTION'});
    }
    
    return res.json();
  })
  .then(datas => {
    next({
      type: action.type,
      payload: {
        result: 'success',
      }
    });
  })
  .catch((e) => {
    return next({type: 'EXCEPTION'});
  });
}

export default upload;