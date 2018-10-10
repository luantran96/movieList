import { combineReducers } from 'redux';
import movieList from './movieList.js';
import inputField from './inputFieldReducer.js';

//var rootReducer = combineReducers({currentVideo : currentVideo ,videoList: videoList});
var rootReducer = combineReducers({movieList: movieList, inputField: inputField});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
