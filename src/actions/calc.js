import { createAction } from 'redux-actions';
import { URL_TYPE, METHOD, COMMAND_CALC } from '../constant/Const';

export const start = createAction('CALC_START', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ADD_SINGLE,
  method: METHOD.GET,
}));

/** next */
export const next = createAction('CALC_NEXT', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ADD_SINGLE,
  method: METHOD.POST,
}));

/** next */
export const result = createAction('CALC_RESULT', () => ({
  urlType: URL_TYPE.COMMAND,
  command: COMMAND_CALC.ADD_RESULT,
  method: METHOD.GET,
}));