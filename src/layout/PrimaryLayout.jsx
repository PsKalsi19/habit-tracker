import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PrimaryLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PrimaryLayout;