/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import habits from "../db/habits_data";


const habitReducer=(state,{type,payload})=>{
switch (type) {

    case "":
        
        return {...state,payload};

    default:
        return state;
}
}

export const HabitsContext=createContext()
const HabitsProvider = ({children}) => {
    const [habitsState,habitsDispatch]=useReducer(habitReducer,habits)
    return (
      <HabitsContext.Provider value={{habitsState,habitsDispatch}}>
        {children}
      </HabitsContext.Provider>
    );
};

export default HabitsProvider;