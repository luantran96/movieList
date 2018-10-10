import React from 'react';
import store from '../store/store.js';

var Search = ({ OnClickAddMovie,handleInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
    />
    <button onClick = { () =>{
     OnClickAddMovie(store.getState().inputField); 
    }} >Add movie</button>
  </div>
);

export default Search;