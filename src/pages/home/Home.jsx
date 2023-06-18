import { useContext } from "react";
import { HabitsContext } from "../../context/HabitsProvider";

const Home = () => {
    const {habitsState}=useContext(HabitsContext)
    console.log(habitsState);
    return (
        <div>
            dfsdf
        </div>
    );
};

export default Home;