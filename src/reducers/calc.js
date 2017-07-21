import { handleActions } from 'redux-actions';

const initialState = {
  calcInfo: {
    leftNum: '1',
    rightNum: '2',
    operator: '+',
  },
};

const calc = handleActions({

}, initialState);

export default calc;
