import { CALL_API } from 'redux-api-middleware';
import { USERS_URL, USER_PROPS_URL } from 'src/constant/URLs';
import { METHOD } from 'src/constant/Const';

export const users = () => ({
  [CALL_API]: {
    endpoint: USERS_URL,
    method: METHOD.GET,
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
  },
});

export const userProps = () => ({
  [CALL_API]: {
    endpoint: USER_PROPS_URL,
    method: METHOD.GET,
    types: ['USER_PROPS_REQUEST', 'USER_PROPS_SUCCESS', 'USER_PROPS_FAILED'],
  },
});
