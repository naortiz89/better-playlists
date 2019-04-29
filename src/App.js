import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle= {
  color: "blue"
};
let fakeServerData = {
  user: {
    name: 'Nick',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Blue Laces 2', duration: 2344},
          {name: 'Hussle & Motivate', duration: 42390}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name:'Test', duration: 4354},
          {name: 'Test 2', duration: 34534},
          {name: 'Test 3', duration: 4325}
        ]
      },
      {
        name: 'Another Playlist - The Best',
        songs: [
          {name: 'Thing', duration: 54423},
          {name:'Thing 2', duration: 45434},
          {name: 'Thing 3', duration: 34534}
        ]
      },
      {
        name: 'Last Playlist',
        songs:[
          {name: 'Hello World', duration: 34543},
          {name: 'Hello World 2', duration: 345435},
          {name: 'Hello World 3', duration: 4545}
        ]
      }
    ]
  }
}; 

class PlaylistCounter extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: "40%", display:"inline-block"}}>
        <h2>{this.props.playlists.length} PLaylists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display:"inline-block"}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>  
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount () {
    setTimeout(() => { 
      this.setState({serverData: fakeServerData})
    }, 1000);
  }
  render () {
    return (  
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name}'s Playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            <Filter/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
            <Playlist/>
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
