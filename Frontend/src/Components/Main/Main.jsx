import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Home from "../Home/Home";
import Footer from "../Home/Footer";
const Main = () => {
    return (
        <div >
           <Navbar></Navbar> 
           <Home></Home>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;