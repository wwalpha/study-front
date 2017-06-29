import { handleActions } from 'redux-actions';
import { UPLOAD_STATUS } from '../constant/Const';

const initialState = {
  initCmp: 0,
  visible: false,
  users: [],
  currUser: '',
  checkedUser: 0,
  wordType: '1',
  uploadStatus: '0',
};

const app = handleActions({

  SWITCH_TYPE: (state, action) => Object.assign({}, state, {
    wordType: action.payload.wordType,
  }),

  USERS_SUCCESS: (state, action) => {
    const user = action.payload.datas === undefined ? '' : action.payload.datas[0];

    return Object.assign({}, state, {
      initCmp: 100,
      users: action.payload.datas,
      currUser: user,
    });
  },

  USERS_FAILED: (state, action) => Object.assign({}, state, {
    initCmp: 100,
  }),

  SWITCH: (state, action) => Object.assign({}, state, {
    visible: !state.visible,
  }),

  USER_CHANGE: (state, action) => Object.assign({}, state, {
    checkedUser: action.payload.index,
    currUser: state.users[action.payload.index],
  }),

  UPDATE_SETTINGS_REQUEST: (state, action) => Object.assign({}, state, {
    uploadStatus: UPLOAD_STATUS.STARTING,
  }),

  UPDATE_SETTINGS_SUCCESS: (state, action) => Object.assign({}, state, {
    uploadStatus: UPLOAD_STATUS.READY,
  }),

  UPDATE_SETTINGS_FAILED: (state, action) => Object.assign({}, state, {
    uploadStatus: UPLOAD_STATUS.READY,
  }),

  EXCEPTION: (state, action) => Object.assign({}, state, {
  }),

}, initialState);

export default app;
