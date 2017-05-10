const initialState = '';

export default function filterTracks(state = initialState, action) {
  if (action.type === 'FIND_TRACKS') {
    return action.payload;
  }
  return state;
}
