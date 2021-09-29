import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: "No scrubs", duration: "4:05" },
        { title: "Macarena", duration: "3:45" },
        { title: "All stars", duration: "2:12" },
        { title: "Hello", duration: "3:20" },
    ];
};

const selectedSongReducer = (selectedSong = "", action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});