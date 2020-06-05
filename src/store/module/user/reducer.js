import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.profile = null;
      });
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile.client.name = action.payload;
      });
    default:
      return state;
  }
}
