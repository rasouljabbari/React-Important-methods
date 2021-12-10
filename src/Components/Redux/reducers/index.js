import {combineReducers} from "redux";

const  songsReducer = () => {
    return [
        { id: 1 , title : 'Zim Zim' , duration : '4:05' },
        { id: 2 , title : 'Behet Gol Midam' , duration : '3:50' },
        { id: 3 , title : 'Bigharar ', duration : '2:25' },
        { id: 4 , title : 'Gole Yakh' , duration : '4:50' },
    ]
}

const  selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return  selectedSong
}

export  default  combineReducers({
    songs : songsReducer,
    selectedSongReducer : selectedSongReducer
})