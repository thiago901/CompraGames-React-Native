import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      // eslint-disable-next-line prettier/prettier
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    case '@auth/SIGN_OUT':
      // eslint-disable-next-line prettier/prettier
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
