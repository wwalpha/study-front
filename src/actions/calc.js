import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND_CALC } from '../constant/Const';

export const start = createAction('CALC_START', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ADD_SINGLE,
  method: METHOD.GET,
}));

/** next */
export const addNext = createAction('ADD_NEXT', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ADD_SINGLE,
  method: METHOD.GET,
}));

/** next */
export const answer = createAction('ANSWER', (calcInfo, resultNum) => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ANSWER,
  method: METHOD.POST,
  headers: {
    Accept: 'application/json, text/plain, */*',
    ContentType: 'application/json',
  },
  body: JSON.stringify({
    leftNum: calcInfo.leftNum,
    operator: calcInfo.operator,
    rightNum: calcInfo.rightNum,
    resultNum: resultNum,
  }),
}));