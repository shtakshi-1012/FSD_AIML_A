import React, { useReducer } from 'react'

const ReducerEx = () => {
    const initialValue={count:0};
    const [state,dispatch]=useReducer(reducer,initialValue.count);
    function reducer(state,action){
        switch(action.type){
            case "add":
                return state+1;
            case "sub":
                return state-1;
                //return {count:state.count-1};
            case "reset":
                return 0;
            default:
                throw new Error("unexpected action");
        }
    }
  return (
    <div>
        <h1>
            Counter:{state}
        </h1>
        <button onClick={()=>dispatch=({type:"add"})}>Increment</button>
        <button onClick={()=>dispatch=({type:"sub"})}>Decrement</button>
        <button onClick={()=>dispatch=({type:"reset"})}>Reset</button>

    </div>
  )
}

export default ReducerEx