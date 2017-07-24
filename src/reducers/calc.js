import { handleActions } from 'redux-actions';

const initialState = {
  calcInfo: {
  },
};

const calc = handleActions({

  CALC_START: (state, action) => Object.assign({}, state, {
  }),

  ADD_NEXT: (state, action) => Object.assign({}, state, {
    calcInfo: action.payload.datas,
  }),

}, initialState);

export default calc;
