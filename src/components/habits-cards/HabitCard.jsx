import { useLocation } from "react-router-dom";
import HabitsCardMenu from "../habits-card-menu/HabitsCardMenu";

/* eslint-disable react/prop-types */


const HabitCard = ({habit}) => {
const location=useLocation()
    return (
        <div className="max-w-lg px-6 pt-6 pb-4 m-2 bg-gray-400 border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-between mb-4">
                <div className="flex flex-row">
                    <img className="w-12 h-12 rounded-full" src={habit.imgUrl} alt="avatar" />
                    <div className="flex flex-col ml-4">
                        <p className="font-semibold text-gray-700">{habit.name}</p>
                        {/* <small className="text-xs font-normal tracking-tight text-gray-600 ">{username}</small> */}
                    </div>
                </div>

                {location.pathname!=='/archive' && <HabitsCardMenu habit={habit} />}
            </div>
        </div>
    );
};

export default HabitCard;