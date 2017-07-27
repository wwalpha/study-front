import { handleActions } from 'redux-actions';

const initialState = {
  calcInfo: {},
  scoreInfo: {},
  starting: false,
};

const calc = handleActions({

  CALC_START: (state, action) => Object.assign({}, state, {
    starting: true,
  }),

  CALC_END: (state, action) => Object.assign({}, state, {
    starting: false,
    calcInfo: {},
  }),

  CALC_SCORE: (state, action) => Object.assign({}, state, {
    scoreInfo: action.payload.datas,
    calcInfo: {},
  }),

  ADD_NEXT: (state, action) => Object.assign({}, state, {
    calcInfo: action.payload.datas,
    scoreInfo: {},
  }),

}, initialState);

export default calc;
