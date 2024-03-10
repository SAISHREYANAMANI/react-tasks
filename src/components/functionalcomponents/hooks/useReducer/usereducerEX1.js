import { useReducer } from "react"


function reducer(state,action){
    console.log(state,action);
    switch(action.type){
        case "INCREMENT_AGE_BY_10":
        return{...state,age: state.age +10};
        case "DECREMENT_AGE_BY_10":
            return{...state,age:state.age -10};
        case "CHANGE_THE_NAME":
            return{...state,name:"SAI SHREYA"};
        case "ADD_FRUIT":
            // return{...state,fruits:[...state,fruits,"NEW_FRUIT"]}
            return { ...state, fruits: [...state.fruits, " ","NEW_FRUIT"," "] };
        default:
            return state;
    }

}
const initialState={
    age:90,
    name:"shreya",
    fruits:["apple", "banana"]
}
const UseReducer=()=>{
   const[currentState,dispatch]= useReducer(reducer,initialState)
   const incrementAge=()=>{
    dispatch(
        {type:"INCREMENT_AGE_BY_10"}
    )
   };
   const decrementAge=()=>{
    dispatch(
        {type:"DECREMENT_AGE_BY_10"}
    )
   }
   const changeName=()=>{
    dispatch({type:"CHANGE_THE_NAME"})
   }
   const changeFruit=()=>{
    dispatch({type:"ADD_FRUIT"})
   }

    return(
        <>
        <h1>use Reducer Hook</h1>
        <h2>{currentState.age }</h2>
        <h4>{currentState.name}</h4>
        <h4>{currentState.fruits}</h4>
        <button onClick={incrementAge}> Increment age by 10</button>
        <button onClick={decrementAge}> Decrement age by 10</button>
        <button onClick={changeName}> ChangeName</button>
        <button onClick={changeFruit}> ChangeFruit</button>
        </>
    )
}
export default UseReducer