import React from 'react';
import store from '../store/store.js';
import exampleMovieList from '../data/movieListData.js';
import MovieListContainer from '../containers/MovieListContainer.js';
import AddMovieContainer from '../containers/AddMovieContainer.js';
import updateMovieList from '../actions/updateMovieList.js';
import movieListData from '../data/movieListData.js';
import SearchContainer from '../containers/SearchContainer.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   store.dispatch(updateMovieList(movieListData));
  // }

  
  render() {
    
    return (
      <div>
        <div><AddMovieContainer /> </div>
        <div> <SearchContainer /> </div>
          <MovieListContainer />
      </div>
    );
    
  }
}


