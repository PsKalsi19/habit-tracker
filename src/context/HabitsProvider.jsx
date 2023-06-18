/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { createContext } from "react";
import habits from './../db/habits_data';
const currentDate = new Date().toISOString().split('T')[0];

const initialFormData = {
    // designation: "Ms.",
    id:0,
    name: "",
    repeat: "daily",
    goal: "once_a_day",
    timeOfTheDay: "any_time",
    startDate: currentDate,
    imgUrl: 'https://ik.imagekit.io/pb97gg2as/habit/9319899_4142094.jpg?updatedAt=1687102357347',
    isArchived: false,
}

const habitReducer = (state, { type, payload }) => {
    debugger

    switch (type) {
        case "add_to_archive":
            return state.map(ele => ele.id === payload ? ({ ...ele, isArchived: true }) : ele);

        case "add_habit":
            return [...state, payload];

        case "delete_habit":
            return state.filter(ele => ele.id !== payload)

        case "edit_habit":
            return state.map(ele => ele.id === payload.id ? payload : ele)

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
            setFormData,
            initialFormData
        }}>
            {children}
        </HabitsContext.Provider>
    );
};

export default HabitsProvider;