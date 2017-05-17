import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {asyncGetTracks} from './actions/tracks';
import Menu from './Menu';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.trackSearch.value);
    this.props.onFindTrack(this.trackSearch.value)
  }

  render() {
    console.log(this.props.tracks);
    console.log("ownProps: ", this.props.ownProps);
    return (
      <div>
        <Menu />
        <div>
          <input type='text' ref={(input) => {this.trackInput = input}} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type='text' ref={(input) => {this.trackSearch = input}} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>
              <Link to={`/tracks/${track.id}`}>{track.name}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Number(Date.now()),
        name
      }
      dispatch({type: 'ADD_TRACK', payload})
    },
    onFindTrack: (name) => {
      dispatch({type: 'FIND_TRACKS', payload: name})
    },
    onGetTracks: () => {
      dispatch(asyncGetTracks())
    }
  })
)(App);
