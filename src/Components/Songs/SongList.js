import React, {Component} from 'react';
import {connect} from "react-redux";

import {selectedSongs} from "../Redux/actions";

class SongList extends Component {

    showSongs = () => {
        console.log(this.props)
        return this.props.songs?.map(song => {
            return (
                <div key={song.id} className={'d-flex w-100 align-items-center justify-content-between'}>
                    <span>{song.title}</span>
                    <button className={'btn btn-info color-light'} onClick={()=>this.props.selectedSongs(song)}>select</button>
                </div>
            );
        });
    }

    render() {
        console.log('render : ', this.props)

        return (
            <>
                <h1>Song list</h1>
                {this.showSongs()}
            </>
        );
    }
}

const getStateFromRedux = (state) => {
    return {
        songs: state.songs,
    }
}
export default connect(getStateFromRedux, {selectedSongs})(SongList);