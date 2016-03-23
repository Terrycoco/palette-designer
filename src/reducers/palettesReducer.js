import { FETCH_PALETTES } from 'actions/palette';

const INITIAL_STATE = {
  savedPalettes: []
};

export default (state=INITIAL_STATE, action) => {
  console.log('reducer: ', action);
  switch( action.type ) {
    case FETCH_PALETTES: {
      return {...state, savedPalettes: action.payload};
    }

    default:
      return state;
  }
}
