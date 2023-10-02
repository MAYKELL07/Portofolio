import { combineReducers } from 'redux';

// Add a sample reducer
const sampleReducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  // Pass sampleReducer in as a property
  sample: sampleReducer  
});
