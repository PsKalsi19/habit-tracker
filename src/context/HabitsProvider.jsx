/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { createContext } from "react";
import habits from './../db/habits_data';
const currentDate = new Date().toISOString().split('T')[0];

const initialFormData = {
    // designation: "Ms.",
    name: "",
    repeat: "daily",
    goal: "once_a_day",
    timeOfTheDay: "any_time",
    startDate: currentDate,
}

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
    const [toggleModal, setToggleModal] = useState(false);
    const [formData, setFormData] = useState(initialFormData)
    return (
        <HabitsContext.Provider value={{
            habitsState,
            habitsDispatch,
            toggleModal,
            setToggleModal,
            formData,
            setFormData
        }}>
            {children}
        </HabitsContext.Provider>
    );
};

export default HabitsProvider;