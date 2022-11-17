import {
  Action,
  ACTION_TYPES,
  InitialStateType,
} from './FirebaseContext.types';

export const reducer = (state: InitialStateType, action: Action) => {
  const { isAuthenticated, user } = action.payload;

  switch (action.type) {
    case ACTION_TYPES.INITIALIZE:
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      };
    default:
      return state;
  }
};
