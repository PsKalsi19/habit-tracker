import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AddHabit from "../components/add-habit-fab/AddHabit";
import HabitFormModal from "../components/habit-form/HabitFormModal";

const PrimaryLayout = () => {
    return (
        <>
            <Navbar />
            <main className="px-8 py-4 sm:px-24 sm:py-16 my-16">
                <AddHabit/>
                <Outlet />
            </main>
        </>
    );
};

export default PrimaryLayout;