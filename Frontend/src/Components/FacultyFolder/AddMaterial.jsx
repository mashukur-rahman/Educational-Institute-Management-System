import React, { useState } from "react";

const AddMaterial = () => {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add your submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Course</h2>
        <form onSubmit={handleSubmit}>
          {/* Course Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Code
            </label>
            <input
              type="text"
              name="courseCode"
              placeholder="Enter Course Code"
              value={formData.courseCode}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Course Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Link
            </label>
            <input
              type="url"
              name="courseLink"
              placeholder="Enter Course Link"
              value={formData.courseLink}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter Course Description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-blue-500 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMaterial;
