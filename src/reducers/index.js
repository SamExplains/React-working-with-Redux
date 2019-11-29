import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {title: 'First Song', duration: '3:00'},
    {title: 'Second Song', duration: '3:15'},
    {title: 'Third Song', duration: '4:45'},
    {title: 'Fourth Song', duration: '2:45'},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});