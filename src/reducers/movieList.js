import Redux from 'redux';
import store from '../store/store.js';;
import updateMovieList from '../actions/updateMovieList.js';

var movieListReducer = (state, action) => {

  state = state || null;
    
    console.log('state in movieListReducer reducer: ',state);
    console.log('action in movieListReducer reducer: ',action);
    switch (action.type) {
      
        case 'UPDATE_MOVIELIST':
          console.log('action.type is: ', action.type);
            return action.videos;
              
        case 'ADD_MOVIE':
            console.log('movie to add: ', action.title);
            var movies = state.slice();
            console.log('movies : ', movies);
            movies.push({title: action.title});
            return movies;

        default:
            return state;
    }
};

export default movieListReducer;
