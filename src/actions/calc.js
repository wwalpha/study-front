import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND_CALC } from '../constant/Const';

export const start = createAction('CALC_START', () => ({
  urlType: URL_TYPE.COMMAND,
  method: METHOD.GET,
}));

export const end = createAction('CALC_END');

export const score = createAction('CALC_SCORE', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.SCORE,
  method: METHOD.GET,
}));

/** next */
export const next = createAction('NEXT', () => ({
  urlType: URL_TYPE.COMMAND,
  method: METHOD.GET,
}));

/** next */
export const answer = createAction('ANSWER', (calcInfo, startTime) => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ANSWER,
  method: METHOD.POST,
  headers: {
    Accept: 'application/json, text/plain, */*',
    ContentType: 'application/json',
  },
  body: JSON.stringify({
    num1: calcInfo.num1,
    num2: calcInfo.num2,
    num3: calcInfo.num3,
    num4: calcInfo.num4,
    num5: calcInfo.num5,
    opt1: calcInfo.opt1,
    opt2: calcInfo.opt2,
    opt3: calcInfo.opt3,
    startTime,
  }),
}));

/** opertator change */
export const optChange = createAction('OPT_CHANGE', (operator) => ({
  operator,
}));