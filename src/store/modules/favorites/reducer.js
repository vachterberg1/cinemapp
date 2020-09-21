import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@favorites/ADD_FAVORITE':
      return produce(state, (draft) => {
        const { movie } = action;

        draft.push(movie);
      });

    case '@favorites/REMOVE_FAVORITE':
      return produce(state, (draft) => {
        const { imdbID } = action;
        const index = draft.findIndex((fav) => {
          return fav.imdbID === imdbID;
        });
        if (index >= 0) {
          draft.splice(index, 1);
        }
      });

    default:
      return state;
  }
}
