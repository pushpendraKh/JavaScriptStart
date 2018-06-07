const initialState = {
    count: 0
  };
  
const dummyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT1':
        return {
          count: state.count + 1
        };
      case 'DECREMENT1':
        return {
          count: state.count - 1
        };
      case 'ZERO1':
        return {
          count: 0
        };
      default:
        return state;
    }
  }; 
  
  export default dummyReducer;