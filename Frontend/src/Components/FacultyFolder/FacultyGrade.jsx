import React, { useState } from "react";
import backendlink from "../../backendapilink";
import axios from "axios";

const FacultyGrade = () => {
  const [formData, setFormData] = useState({
    email: "",
    course_code: "",
    credit: "",
    grade: "",
    semester: "",
    grade_point: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    const { email, course_code, credit, grade, semester, grade_point } =
      formData;

    try {
      const response = await axios.post(backendlink + "/api/submit_grade", {
        formData,
      });
      if (response.data) {
        alert(response.data);
      }
    } catch (error) {
      console.error("Error submitting grade:", error);
      alert("An error occurred while submitting the grade.");
    }
  };

  return (
    <div className="p-4">
      {/* Grade Form */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Submit Grade</h2>
        <form onSubmit={handleGradeSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter student's email"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Course Code Field */}
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
                value={formData.course_code}
                onChange={handleInputChange}
                placeholder="Enter course code"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Credit Field */}
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
                value={formData.credit}
                onChange={handleInputChange}
                placeholder="Enter course credit"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Grade Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="grade">
                Grade
              </label>
              <input
                type="text"
                id="grade"
                value={formData.grade}
                onChange={handleInputChange}
                placeholder="Enter grade (e.g., A, B+)"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Semester Field */}
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
                value={formData.semester}
                onChange={handleInputChange}
                placeholder="Enter semester"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Grade Point Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="grade_point"
              >
                Grade Point
              </label>
              <input
                type="number"
                step="0.01"
                id="grade_point"
                value={formData.grade_point}
                onChange={handleInputChange}
                placeholder="Enter grade point (e.g., 4.0)"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Submit Grade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultyGrade;
