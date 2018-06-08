import { LOAD_NEWS } from '../actions/actionTypes';
   export default (state = [], action = {}) => {
     switch (action.type) {
       case LOAD_NEWS:
        console.log("loading news");
        return action.payload.results || [];
       case 'LOAD_NEWS1':
          console.log('coming in saga reducer load news1')
          console.log(action.payload)
          return state;
       default:
         return state;
     }
};