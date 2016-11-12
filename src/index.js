
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = Key.key;

// create new Component
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'evil dead'}, (videos) => {
        this.setState({ videos });
        //this.setState({ videos: videos });
        console.log(videos);
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

// generate html
ReactDOM.render(<App/>, document.querySelector('.container'));
