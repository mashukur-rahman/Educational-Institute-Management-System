// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CourseDetails = () => {
//     const { courseCode } = useParams(); // Extract course code from URL
//     const [courseDetails, setCourseDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCourseDetails = async () => {
//             try {
//                 const response = await fetch(`http://your-backend-api.com/course/${courseCode}`);
//                 if (response.ok) {
//                     const data = await response.json();
//                     setCourseDetails(data);
//                 } else {
//                     setError("Course not found or an error occurred.");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching course details.");
//                 console.error("Error fetching course details:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCourseDetails();
//     }, [courseCode]);

//     return (
//         <div className="p-4">
//             <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
//                 <h2 className="text-2xl font-bold mb-4 text-blue-600">
//                     Course Details
//                 </h2>

//                 {/* Loading Indicator */}
//                 {loading && <p>Loading course details...</p>}

//                 {/* Error Message */}
//                 {error && <p className="text-red-500">{error}</p>}

//                 {/* Course Details Table */}
//                 {courseDetails && !loading && !error && (
//                     <div className="mt-6">
//                         <h3 className="text-xl font-bold text-green-600 mb-4">
//                             Details for: {courseDetails.course_code}
//                         </h3>
//                         <table className="table-auto border-collapse border border-gray-300 w-full">
//                             <tbody>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Course Name
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.course_name}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Section
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.section}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Description
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.description}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Theory Room
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.theory_room}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Theory Timing
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.theory_timing}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Lab Room
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.lab_room}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Lab Timing
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.lab_timing}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Credit
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.credit}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Availability
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.availability}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td className="border border-gray-300 px-4 py-2 font-bold">
//                                         Department
//                                     </td>
//                                     <td className="border border-gray-300 px-4 py-2">
//                                         {courseDetails.department}
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CourseDetails;
import React from 'react';

const CourseDetails = () => {
    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;