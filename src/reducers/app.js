import { handleActions } from 'redux-actions'

const initialState = {
  initCmp: 0,
  visible: false,
  users: [],
  currUser: '',
  wordType: '1',
}

const app = handleActions({

  "SWITCH_TYPE": (state, action) => Object.assign({}, state, {
    wordType: action.payload.wordType,
  }),

  "USERS": (state, action) => {
    const user = action.payload.datas === undefined ? '' : action.payload.datas[0];

    return Object.assign({}, state, {
      initCmp: 100,
      users: action.payload.datas,
      currUser: user,
    });
  },

  "SWITCH": (state, action) => Object.assign({}, state, {
    visible: !state.visible,
  }),

  "EXCEPTION": (state, action) => Object.assign({}, state, {
  }),

}, initialState);

export default app;
