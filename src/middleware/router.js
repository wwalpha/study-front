import { push } from 'react-router-redux'

const router = store => next => (action) => {
    if (['ROUTE_ENG'].includes(action.type)) {
      store.dispatch(push('/'));
    }

    if (['ROUTE_CALC'].includes(action.type)) {
      store.dispatch(push('/calc'));
    }

    return next(action);
};

export default router;
