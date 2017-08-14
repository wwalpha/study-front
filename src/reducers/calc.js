import { handleActions } from 'redux-actions';
import Moment from 'moment'

const initialState = {
  calcInfo: {},
  scoreInfo: {},
  starting: false,
  startTime: '',
  operator: '+',
};

const calc = handleActions({

  OPT_CHANGE: (state, action) => Object.assign({}, state, {
    operator: action.payload.operator,
  }),

  CALC_START: (state, action) => Object.assign({}, state, {
    starting: true,
    startTime: Moment().format('YYYYMMDDHHmmss'),
  }),

  CALC_END: (state, action) => Object.assign({}, state, {
    starting: false,
    calcInfo: {},
  }),

  CALC_SCORE: (state, action) => Object.assign({}, state, {
    scoreInfo: action.payload.datas,
    calcInfo: {},
  }),

  NEXT: (state, action) => Object.assign({}, state, {
    calcInfo: action.payload.datas,
    scoreInfo: {},
  }),

}, initialState);

export default calc;
