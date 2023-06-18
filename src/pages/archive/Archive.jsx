import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsProvider";
import HabitCard from "../../components/habits-cards/HabitCard";

const Archive = () => {
    const { habitsState } = useContext(HabitsContext)
    const filteredHabits = habitsState.filter(({ isArchived }) => isArchived)

    return (
        <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl "><span className="text-gray-800 ">Habits </span>Archives</h1>

        {
                filteredHabits.length === 0 && <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-700 lg:text-4xl ">Nothing in Archives.</h2>
            }

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">{filteredHabits.map(habit => <HabitCard key={habit.id} habit={habit} />)}</div>
    </div>
    );
};

export default Archive;