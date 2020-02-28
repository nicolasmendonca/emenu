import { ATTEMPT_LOGIN } from '../actions/types';
import { generateSuccessfulAsyncActionType } from '../utils/actions';

/**
 * Use this utility if you want to use the test user
 */
// import { isProduction } from '../../utils/environment';
// import { createTestAuthenticatedUser } from '../../utils/authUser';
// const initialState = isProduction() ? null : createTestAuthenticatedUser();

/**
 * Otherwise just go with `null`
 */
const initialState = null;

export const authenticatedUser = (state = initialState, action) => {
  switch (action.type) {
    case generateSuccessfulAsyncActionType(ATTEMPT_LOGIN):
      return action.payload;
    default:
      return state;
  }
};
