import { CounterActions , TypeKeys} from "../ActionTypes";

const initialState = {
    count: 0
  };

function countReducer(state = initialState , action:CounterActions){
     switch(action.type){
         case TypeKeys.INC:
            console.log("getting fired")
            return {count: state.count + action.by };
         case TypeKeys.DEC:
            return {count: state.count - action.by};
        case TypeKeys.ZERO:
            return {count: 0};
        default:
            return state
     }


}
// export default countReducer;
// const countReducer = (state = initialState, action:CounterActions) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         console.log("getting fired");
//         return {
//           count: state.count + 1
//         };
//       case 'DECREMENT':
//         return {
//           count: state.count - 1
//         };
//       case 'ZERO':
//         return state;
//         // return {
//         //   count: 0
//         // };
//       default:
//         return state;
//     }
//   };



  export default countReducer;