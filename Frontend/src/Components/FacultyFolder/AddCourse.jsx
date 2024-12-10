import React, { useState } from "react";
import backendlink from "../../backendapilink";
import axios from "axios";
const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    course_code: "",
    section: "",
    course_name: "",
    description: "",
    theory_room: "",
    theory_timing: "",
    lab_room: "",
    lab_timing: "",
    credit: "",
    availability: "",
    department: "",
    semester: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://your-backend-api.com/create-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });
  
      if (response.ok) {
        alert("Course created successfully!");
        setCourseData({
          course_code: "",
          section: "",
          course_name: "",
          description: "",
          theory_room: "",
          theory_timing: "",
          lab_room: "",
          lab_timing: "",
          credit: "",
          availability: "",
          department: "",
          semester: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
      console.log(courseData);
      //   const response = await axios.post(
      //     backendlink + "/api/create_course",
      //     courseData
      //   );

      //   if (response.ok) {
      //     alert("Course created successfully!");
      //     setCourseData({
      //       course_code: "",
      //       section: "",
      //       course_name: "",
      //       description: "",
      //       theory_room: "",
      //       theory_timing: "",
      //       lab_room: "",
      //       lab_timing: "",
      //       credit: "",
      //       availability: "",
      //       department: "",
      //       semester: "",
      //     });
      //   } else {
      //     const errorData = await response.json();
      //     alert(`Error: ${errorData.message}`);
      //   }
    } catch (error) {
      console.error("Error creating course:", error);
      alert("An error occurred while creating the course.");
    }
  };
  

  
  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Create Course</h2>
        <form onSubmit={handleCreateCourse}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Course Code */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="course_code"
              >
                Course Code
              </label>
              <input
                type="text"
                id="course_code"
                value={courseData.course_code}
                onChange={handleInputChange}
                placeholder="Enter course code"
                className="input input-bordered w-full"
              />
            </div>
            {/* Section */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="section"
              >
                Section
              </label>
              <input
                type="text"
                id="section"
                value={courseData.section}
                onChange={handleInputChange}
                placeholder="Enter section"
                className="input input-bordered w-full"
              />
            </div>
            {/* Course Name */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="course_name"
              >
                Course Name
              </label>
              <input
                type="text"
                id="course_name"
                value={courseData.course_name}
                onChange={handleInputChange}
                placeholder="Enter course name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="semester"
              >
                Semester
              </label>
              <input
                type="text"
                id="semester"
                value={courseData.semester}
                onChange={handleInputChange}
                placeholder="Enter semester"
                className="input input-bordered w-full"
              />
            </div>
            {/* Description */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                value={courseData.description}
                onChange={handleInputChange}
                placeholder="Enter course description"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            {/* Theory Room */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="theory_room"
              >
                Theory Room
              </label>
              <input
                type="text"
                id="theory_room"
                value={courseData.theory_room}
                onChange={handleInputChange}
                placeholder="Enter theory room"
                className="input input-bordered w-full"
              />
            </div>
            {/* Theory Timing */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="theory_timing"
              >
                Theory Timing
              </label>
              <input
                type="text"
                id="theory_timing"
                value={courseData.theory_timing}
                onChange={handleInputChange}
                placeholder="Enter theory timing"
                className="input input-bordered w-full"
              />
            </div>
            {/* Lab Room */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="lab_room"
              >
                Lab Room
              </label>
              <input
                type="text"
                id="lab_room"
                value={courseData.lab_room}
                onChange={handleInputChange}
                placeholder="Enter lab room"
                className="input input-bordered w-full"
              />
            </div>
            {/* Lab Timing */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="lab_timing"
              >
                Lab Timing
              </label>
              <input
                type="text"
                id="lab_timing"
                value={courseData.lab_timing}
                onChange={handleInputChange}
                placeholder="Enter lab timing"
                className="input input-bordered w-full"
              />
            </div>
            {/* Credit */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="credit"
              >
                Credit
              </label>
              <input
                type="number"
                id="credit"
                value={courseData.credit}
                onChange={handleInputChange}
                placeholder="Enter credit hours"
                className="input input-bordered w-full"
              />
            </div>
            {/* Availability */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="availability"
              >
                Availability
              </label>
              <select
                id="availability"
                value={courseData.availability}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="">Select</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
            {/* Department */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                value={courseData.department}
                onChange={handleInputChange}
                placeholder="Enter department"
                className="input input-bordered w-full"
              />
            </div>
            {/* Semester */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="semester"
              >
                semester
              </label>
              <input
                type="text"
                id="semester"
                value={courseData.semester}
                onChange={handleInputChange}
                placeholder="Enter semester"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
