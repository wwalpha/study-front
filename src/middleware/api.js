import fetch from 'isomorphic-fetch';

const api = store => next => action => {
  if (["SWITCH_TYPE"].includes(action.type)) {
    next({
      type: "CLEAR_WORDS",
    });
  }

  if (!["NEXT_PAGE","SAVE", "USERS", "DOWNLOAD", "PLAYLIST"].includes(action.type)) {
    return next(action);
  }

  // Get params
  const { host, command, method } = action.payload;
  const { currUser, wordType } = store.getState().app;

  const newURL = [host, currUser, wordType, command].join('/');
  const url = command === undefined ? host : newURL; 

  fetch(url, {
    mode: 'cors',
    method,
    headers: action.payload.headers,
    body: action.payload.body,
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
      type: action.type,
      payload: {
        datas,
      }
    });
  })
  .catch((e) => {
    console.log(1111);
    return next({type: 'EXCEPTION'});
  }); 
}

export default api;