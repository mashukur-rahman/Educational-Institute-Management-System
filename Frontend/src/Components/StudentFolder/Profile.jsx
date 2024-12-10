import React, { useState } from "react";
import backendlink from "../../backendapilink";

const Profile = () => {
  const [formData, setFormData] = useState({
    contact: "",
    address: "",
    password: "",
    semester: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleUpdateRegister = async (e) => {
    e.preventDefault();
    const { contact, address, password, semester } = formData;

    try {
      const response = await fetch(backendlink + "/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact,
          address,
          password,
          semester,
        }),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile.");
    }
  };

  return (
    <div className="p-4">
      {/* Form */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Update Profile
        </h2>
        <form onSubmit={handleUpdateRegister}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter student's name"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter student's email"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            {/* Contact Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="contact"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter new contact"
                className="input input-bordered w-full"
              />
            </div>
            {/* Address Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter new address"
                className="input input-bordered w-full"
              />
            </div>
            {/* Password Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter new password"
                className="input input-bordered w-full"
              />
            </div>
            {/* semster  */}
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
                placeholder="Semester"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
