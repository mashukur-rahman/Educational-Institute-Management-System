import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { BsLayoutSidebar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaArrowRightFromBracket, FaBookOpen } from "react-icons/fa6";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscInbox } from "react-icons/vsc";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(false);
  const [faculty, setFaculty] = useState(false);
  useEffect(() => {
    const role = jwtDecode(JSON.parse(sessionStorage.getItem("token"))).role;
    if (role == "student") {
      setStudent(true);
    } else if (role == "faculty") {
      setFaculty(true);
    }
  }, []);

  function logout() {
    sessionStorage.clear();
    navigate("/");
  }

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handleSideBar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  // const handleLogout = () => {
  //     logOut()
  //         .then(() => {
  //             navigate(location?.state?.from || '/login');
  //         })
  //         .catch(error => {
  //             console.error("Logout error: ", error);
  //         });
  // };

  return (
    <div className="flex">
      <div
        className={`w-[275px] min-h-screen bg-[#fcfaf8] py-4 px-4 text-[15px] flex flex-col duration-300 ${
          isSidebarVisible ? "block" : "hidden"
        }`}
      >
        {/* if role admin  */}
        {/* <div> 
                    <div className="flex justify-between items-center w-full">
                        <div className="font-bold">Admin</div>
                        // {/* <div className="font-bold">{user.role}</div>
                        <button onClick={handleSideBar}><BsLayoutSidebar className="text-xl" /></button>
                    </div>
                    <NavLink to='/inbox' className="flex items-center mt-4 py-2"><VscInbox className="mr-2 text-xl" /> Users account</NavLink>
                    <NavLink to='/dashboard' className="flex items-center pb-2"><RxDashboard className="mr-2 text-xl" /> Courses</NavLink>
                    <NavLink to='/leaderboard' className="flex items-center pb-2"><MdOutlineLeaderboard className="mr-2 text-xl" /> Upload course</NavLink>
                    <NavLink className="flex items-center pb-2"><SiGitconnected className="mr-2 text-xl" /> Students</NavLink>
                </div> */}
        {faculty && (
          <div>
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Faculty</div>
              <button onClick={handleSideBar}>
                <BsLayoutSidebar className="text-xl" />
              </button>
            </div>
            <NavLink
              to="facultyDashboard"
              className="flex items-center mt-4 py-2"
            >
              <VscInbox className="mr-2 text-xl" />
              Dashboard
            </NavLink>
            <NavLink to="addCourse" className="flex items-center pb-2">
              <RxDashboard className="mr-2 text-xl" /> Create course
            </NavLink>
            <NavLink to="addMaterial" className="flex items-center pb-2">
              <MdOutlineLeaderboard className="mr-2 text-xl" />
              Add material
            </NavLink>
            <NavLink to="facultygrade" className="flex items-center pb-2">
              <MdOutlineLeaderboard className="mr-2 text-xl" />
              Update GradeSheet
            </NavLink>
          </div>
        )}
        {student && (
          <div>
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Student</div>
              <button onClick={handleSideBar}>
                <BsLayoutSidebar className="text-xl" />
              </button>
            </div>
            <NavLink
              to="studentdashboard"
              className="flex items-center mt-4 py-2"
            >
              <VscInbox className="mr-2 text-xl" />
              Dashboard
            </NavLink>
            <NavLink to="profile" className="flex items-center pb-2">
              <CgProfile className="mr-2 text-xl" /> Profile
            </NavLink>
            <NavLink to="gradesheet" className="flex items-center pb-2">
              <RxDashboard className="mr-2 text-xl" /> Gradesheet
            </NavLink>
            <NavLink to="material" className="flex items-center pb-2">
              <FaBookOpen className="mr-2 text-xl" /> Material
            </NavLink>
            <NavLink to="enroll" className="flex items-center pb-2">
              <AiOutlineProfile className="mr-2 text-xl" /> Enroll
            </NavLink>
          </div>
        )}

        <button
          className="flex items-center gap-4 text-[#dc4c3e] font-semibold mt-auto"
          onClick={logout}
        >
          <FaArrowRightFromBracket />
          Logout
        </button>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <button
          onClick={handleSideBar}
          className={`text-xl fixed top-4 left-4 ${
            isSidebarVisible ? "hidden" : "block"
          }`}
        >
          <BsLayoutSidebar />
        </button>
        {/* This is where the main content will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
