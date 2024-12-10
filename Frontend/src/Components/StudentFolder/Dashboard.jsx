import axios from "axios";
import { useEffect, useState } from "react";
import backendlink from "../../backendapilink";
import { jwtDecode } from "jwt-decode";
const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const user = jwtDecode(JSON.parse(sessionStorage.getItem("token"))).email;
  useEffect(() => {
    async function getCourses() {
      const result = await axios.post(backendlink + "/api/enrolled_courses", {
        email: user,
      });
      console.log("enrolled", result.data);
      if (result.data) {
        setCourses(result.data);
      }
    }
    getCourses();
  }, []);

  useEffect(() => {
    async function getCourses2() {
      const result2 = await axios.post(
        backendlink + "/api/enrolled_courses_detail",
        {
          email: user,
        }
      );
      if (result2.data) {
        setSchedules(result2.data);
      }
    }
    getCourses2();
  }, []);

  // const courses = [
  //     {
  //         name: 'CSE110-Introduction to Computer Science',
  //         section: 'Section 30',
  //         faculty: 'Dr. John Doe',
  //         schedule: [
  //             { day: 'Monday', time: '8:00 - 9:30 AM' },
  //             { day: 'Wednesday', time: '9:00 - 10:30 AM' },
  //         ],
  //     },
  //     {
  //         name: 'MAT101-Advanced Mathematics',
  //         section: 'Section 21',
  //         faculty: 'Prof. Jane Smith',
  //         schedule: [
  //             { day: 'Tuesday', time: '11:00 - 12:30 PM' },
  //             { day: 'Thursday', time: '9:30 - 11:00 AM' },
  //         ],
  //     },
  //     {
  //         name: 'CSE220-Data Structure',
  //         section: 'Section 09',
  //         faculty: 'Dr. Mira',
  //         schedule: [
  //             { day: 'Tuesday', time: '1:00 - 2:30 PM' },
  //             { day: 'Thursday', time: '1:00 - 2:30 PM' },
  //         ],
  //     },
  //     {
  //         name: 'STAT101-Advanced Statistics',
  //         section: 'Section 45',
  //         faculty: 'Prof. Mili',
  //         schedule: [
  //             { day: 'Friday', time: '9:30 - 11:00 AM' },
  //         ],
  //     },
  // ];

  // Define the days and time slots
  //   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  //   const timeSlots = [
  //     "8:00 - 9:30 AM",
  //     "9:30 - 11:00 AM",
  //     "11:00 - 12:30 PM",
  //     "12:30 - 1:00 PM",
  //     "1:00 - 2:30 PM",
  //   ];

  // Populate the schedule matrix dynamically
  //   const scheduleMatrix = timeSlots.map((time) =>
  //     days.map((day) => {
  //       const course = courses.find((c) =>
  //         c.schedule.some((s) => s.day === day && s.time === time)
  //       );
  //       return course ? course.name.split("-")[0] : "-";
  //     })
  //   );

  return (
    <div>
      {/* Advised Courses */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Enrolled Courses
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Course Name</th>
                <th className="py-2 px-4 text-left">Section</th>
                <th className="py-2 px-4 text-left">Semester</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"
                  } hover:bg-blue-200`}
                >
                  <td className="py-2 px-4">{course.course_code}</td>
                  <td className="py-2 px-4">{course.section}</td>
                  <td className="py-2 px-4">{course.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Schedule */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Course Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-center">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Room</th>
                {/* {schedules.map((day) => (
                  <th key={day} className="py-2 px-4">
                    {day.theory_timing}
                  </th>
                ))} */}
              </tr>
            </thead>
            <tbody>
              {schedules.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="font-bold py-2 px-4">{row.course_code}</td>
                  <td className="font-bold py-2 px-4">{row.theory_timing}</td>
                  <td className="font-bold py-2 px-4">{row.theory_room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
