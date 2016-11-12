
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = Key.key;

// create new Component
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'evil dead'}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos}/>
      </div>
    );
  }
}

// generate html
ReactDOM.render(<App/>, document.querySelector('.container'));
