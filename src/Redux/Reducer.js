const initialState=10;
export const Reducer=(state=initialState,action)=>{
     switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "ADD BY":
            return state+action.payload

        default:
            return state;
     }
}