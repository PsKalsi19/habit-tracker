import { PlusIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsProvider";



const AddHabit = () => {
    const { setToggleModal}=useContext(HabitsContext)

    const showAddHabitModal=()=>{
        setToggleModal(true)
    }

    return (
        <button onClick={showAddHabitModal} title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-gray-800 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-700 hover:drop-shadow-2xl "><PlusIcon className="h-6 w-6 text-gray-100" />
        </button>
    );
};

export default AddHabit;