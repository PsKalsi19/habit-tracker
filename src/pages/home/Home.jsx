import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsProvider";
import HabitCard from "../../components/habits-cards/HabitCard";

const Home = () => {
    const { habitsState } = useContext(HabitsContext)
    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl "><span className="text-blue-500 ">Habits</span>Tracker</h1>
            <div className="flex space-x-2">{habitsState.map(habit => <HabitCard key={habit.id} habit={habit} />)}</div>
        </div>
    );
};

export default Home;