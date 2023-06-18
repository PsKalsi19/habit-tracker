import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsProvider";
import HabitCard from "../../components/habits-cards/HabitCard";

const Home = () => {
    const { habitsState } = useContext(HabitsContext)
    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl "><span className="text-gray-800 ">Habits</span> Tracker</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">{habitsState.filter(({isArchived})=>!isArchived).map(habit => <HabitCard key={habit.id} habit={habit} />)}</div>
        </div>
    );
};

export default Home;