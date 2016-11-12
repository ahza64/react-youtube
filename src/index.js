
import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = Key.key;

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
    console.log(data);
});

// create new Component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// generate html
ReactDOM.render(<App/>, document.querySelector('.container'));
