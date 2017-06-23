import fetch from 'isomorphic-fetch';

const api = store => next => action => {
  if (["SWITCH_TYPE"].includes(action.type)) {
    next({
      type: "CLEAR_WORDS",
    });
  }

  if (!["NEXT_PAGE","SAVE", "USERS", "DOWNLOAD"].includes(action.type)) {
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
    console.log(222);
    if (res.status !== 200) {
      return next({type: 'EXCEPTION'});
    }
    
    return res.json();
  })
  .then(datas => {
    console.log(333);
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