import { useReducer, useState } from "react";
 
const ACTION = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement'
}

function reducer(state, action) {
   // return {count: state.count + 1}
    switch(action.type) {
        case ACTION.INCREMENT :
            return { count: state.count + 1}
        case ACTION.DECREMENT : 
        return { count: state.count - 1}
        default:
            return state
    }
}


export default function CounterReducerHook(){
    const [state, dispatch] = useReducer(reducer, { count : 0})
    // const [counter, setCounter] = useState(0);

    const incrementCount = (amount) => {
        // setCounter(prevCount => prevCount + amount)
        dispatch({ type : ACTION.INCREMENT})
    }

     const decrementCount = (amount) => {
      //  setCounter(prevCount => prevCount - amount)
      dispatch({type : ACTION.DECREMENT})
    } 

    return(
        <>
        <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}