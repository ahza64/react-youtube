
import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';

import SearchBar from './components/search_bar';

const API_KEY = Key.key;

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
