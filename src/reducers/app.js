import { handleActions } from 'redux-actions';
import { UPLOAD_STATUS } from '../constant/Const';

const initialState = {
  initCmp: 0,
  visible: false,
  users: [],
  currUser: '',
  checkedUser: -1,
  wordType: '1',
  uploadStatus: '0',
  userProps:{},
  ctgNames: [],
  ctgValues: [],
};

const app = handleActions({

  SWITCH_TYPE: (state, action) => Object.assign({}, state, {
    wordType: action.payload.wordType,
  }),

  USERS_SUCCESS: (state, action) => {
    return Object.assign({}, state, {
      initCmp: 100,
      users: action.payload.datas,
    });
  },

  USERS_FAILED: (state, action) => Object.assign({}, state, {
    initCmp: 100,
  }),

  SWITCH: (state, action) => Object.assign({}, state, {
    visible: !state.visible,
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

  USER_PROPS_REQUEST: (state, action) => Object.assign({}, state, {
    checkedUser: action.payload.index,
    currUser: state.users[action.payload.index],
  }),

  USER_PROPS_SUCCESS: (state, action) => Object.assign({}, state, {
    userProps: action.payload.datas,
    ctgNames: action.payload.datas.ctgNames,
    ctgValues: [],
  }),

  USER_PROPS_FAILED: (state, action) => Object.assign({}, state, {
    userProps: {},
    ctgNames: [],
    ctgValues: [],
  }),

  CTG_CHANGED: (state, action) => Object.assign({}, state, {
    ctgValues: action.payload.values,
  }),

  EXCEPTION: (state, action) => Object.assign({}, state, {
  }),

}, initialState);

export default app;
