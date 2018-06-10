import { LOGIN } from '../actions/actionTypes';

// reducer with initial state
const initialState = {
    isLoggedIn: false,
    temp : "1"
  };
  
export default (state = initialState, action = {}) => {
     switch (action.type) {
       case LOGIN:
            console.log("state changed");
            return { ...state, isLoggedIn: true };
        default:
            return state;
     }
};