const initialState = {
    count:1
}
const reducer = ( state = initialState, action) => {
    if (action.type === 'ADD') {
        console.log("reudcer");
       return {
           count: state.count + 1
       }
       
    }else{
        return state
    }
  }

  export default reducer