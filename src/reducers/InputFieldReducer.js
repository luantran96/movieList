import Redux from 'redux';

var inputFieldReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  state = state || null;

  	console.log('inside inputFieldReducer ');
  	console.log('action in inputFieldReducer:',action);

    switch (action.type) {
        case 'INPUT_FIELD':
            return action.input;

        default:
            return state;
    }
};

export default inputFieldReducer;
