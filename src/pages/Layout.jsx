import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout(){
    return(
        <>
            <Navbar />  {/*This navbar is a shared ui which is present across all ui components*/}
            <Outlet /> {/**The actual page which will be rendered across navbar */}
        </>
    );
}

export default MainLayout;