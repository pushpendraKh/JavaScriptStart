import { SEARCH_NEWS } from '../actions/actionTypes';

export default (state = '', action = {}) => {
     switch (action.type) {
       case SEARCH_NEWS:
         console.log("coming")
         return action.payload;
       default:
         return state;
} };
