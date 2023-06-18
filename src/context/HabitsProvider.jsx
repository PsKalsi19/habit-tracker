/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { createContext } from "react";
import habits from "../db/habits_data";


const habitReducer = (state, { type, payload }) => {
    switch (type) {

        case "":

            return { ...state, payload };

        default:
            return state;
    }
}

export const HabitsContext = createContext()
const HabitsProvider = ({ children }) => {
    const [habitsState, habitsDispatch] = useReducer(habitReducer, habits);
    const [toggleModal, setToggleModal] = useState(false)
    return (
        <HabitsContext.Provider value={{ habitsState, habitsDispatch, toggleModal, setToggleModal }}>
            {children}
        </HabitsContext.Provider>
    );
};

export default HabitsProvider;