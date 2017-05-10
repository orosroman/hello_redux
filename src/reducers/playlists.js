const initialState = [
  'Playlist 1',
  'Playlist 2'
]

export default function playlists(state = initialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
