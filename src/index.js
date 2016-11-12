
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = Key.key;

// create new Component
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });
        //this.setState({ videos: videos });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// generate html
ReactDOM.render(<App/>, document.querySelector('.container'));
