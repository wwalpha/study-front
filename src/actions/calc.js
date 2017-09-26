import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND_CALC } from '../constant/Const';

/** Start Calculation */
export const start = createAction('CALC_START', () => ({
  urlType: URL_TYPE.COMMAND,
  method: METHOD.GET,
}));

/** End Calculation */
export const end = createAction('CALC_END');

/** Show Score */
export const score = createAction('CALC_SCORE', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.SCORE,
  method: METHOD.GET,
}));

/** next */
export const next = createAction('NEXT', () => ({
  urlType: URL_TYPE.COMMAND,
  method: METHOD.GET,
  command: COMMAND_CALC.NEXT,
}));

/** answer */
export const answer = createAction('ANSWER', (calcInfo) => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ANSWER,
  method: METHOD.POST,
  headers: {
    Accept: 'application/json, text/plain, */*',
    ContentType: 'application/json',
  },
  body: JSON.stringify(calcInfo),
}));

/** opertator change */
export const optChange = createAction('OPT_CHANGE', (operator) => ({
  operator,
}));

export const onCheck = createAction('ON_CHECK', (conditions) => ({
  conditions,
}));