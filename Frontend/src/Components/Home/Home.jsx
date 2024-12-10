
import { NavLink, Outlet } from "react-router-dom";
import './../../App.css'


const Home = () => {


    return (
        <div className="bg-[#F7F5F9] pt-24 px-24 md:px-16 flex flex-col ">
            <div className="w-full  mr-16">
                <h3 className="italic text-xl md:text-4xl font-bold pb-2 md:pb-8">Edu ed <span className="text-customBlue">Your Gateway</span> to <span className="text-customPurple"> Knowledge & Growth</span></h3>
                <p className="text-[14px] pb-2">we believe education is the key to unlocking potential and shaping a better future. Our platform is designed to provide learners of all ages and backgrounds with access to high-quality, interactive, and engaging educational resources.
                </p>
                <p className="text-[14px] pb-12 hidden lg:flex">To make education accessible, affordable, and impactful for everyone, empowering individuals to achieve their goals and contribute to the global community.</p>
                <img className="hidden lg:flex" src="https://i.ibb.co/nq21Pzn/Group-27.png" alt="" />
            </div>
            <div className="w-full lg:w-2/5">

                <div className="flex flex-col-reverse lg:flex-col">
                    <div>
                        <img className="lg:hidden mt-8" src="https://i.ibb.co/nq21Pzn/Group-27.png" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;