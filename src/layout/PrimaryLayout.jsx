import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const PrimaryLayout = () => {
    return (
        <>
            <Navbar />
            <main className=" my-16">
                <Outlet />
            </main>
        </>
    );
};

export default PrimaryLayout;