import React from 'react';
import AddMovie from './../components/addMovie.js';
import addMovie from './../actions/addMovie.js';
import { connect } from 'react-redux';
import updateInputField from './../actions/updateInputField.js';

const mapDispatchToProps = (dispatch) => {
   return {    
   		handleInputChange: (input) => dispatch(updateInputField(input)), 
        OnClickAddMovie: (title) => dispatch(addMovie(title))
    };
};



var AddMovieContainer = connect(null, mapDispatchToProps)(AddMovie);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.




export default AddMovieContainer;
