import React from "react";


const Gradesheet = () => {

    const grades = [
        {
          semester: "Summer 2023",
          studentName: "Kiran",
          courses: [
            { courseName: "Programming Language I", credits: 3.0, grade: "A-", gradePoint: 3.7 },
            { courseName: "Foundation Course (English)", credits: 0.0, grade: "A-", gradePoint: 3.7 },
            { courseName: "Mathematics I", credits: 3.0, grade: "A+", gradePoint: 4.0 },
            { courseName: "Principles of Physics I", credits: 3.0, grade: "A", gradePoint: 4.0 },
          ],
        },
        {
          semester: "Fall 2023",
          studentName: "Kiran",
          courses: [
            { courseName: "Programming Language II", credits: 3.0, grade: "A", gradePoint: 4.0 },
            { courseName: "Fundamentals of English", credits: 3.0, grade: "A-", gradePoint: 3.7 },
            { courseName: "Mathematics II", credits: 3.0, grade: "A", gradePoint: 4.0 },
            { courseName: "Elements of Statistics", credits: 3.0, grade: "B+", gradePoint: 3.3 },
          ],
        },
      ];

      const calculateStudentCGPA = (grades, studentName) => {
        let totalGradePoints = 0;
        let totalCourses = 0;
      
        grades.forEach(entry => {
          if (entry.studentName === studentName) {
            entry.courses.forEach(course => {
              if (course.credits > 0) { // Only count courses with non-zero credits
                totalGradePoints += course.gradePoint;
                totalCourses += 1;
              }
            });
          }
        });
      
        return totalCourses > 0 ? (totalGradePoints / totalCourses).toFixed(2) : "N/A";
      };
      
      // Calculate CGPA for Kiran
    //   const kiranCGPA = calculateStudentCGPA(grades, "Kiran");
    //   console.log(`Cumulative CGPA for Kiran: ${kiranCGPA}`);

      return (
        <div>
                <h2 className="text-2xl font-bold my-4 text-center text-blue-600">Total Grade</h2>

        <div className="overflow-x-auto p-4">
        <table className="table w-full border border-gray-300 rounded-lg shadow-md">
          {/* Table Header */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-2 w-24">Semester</th>
              <th className="py-2 px-2 w-32">Student Name</th>
              <th className="py-2 px-4">Course Name</th>
              <th className="py-2 px-4 w-20 text-center">Credits</th>
              <th className="py-2 px-4 w-20 text-center">Grade</th>
              <th className="py-2 px-4 w-28 text-center">Grade Point</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {grades.map((semesterData, index) => (
              <React.Fragment key={index}>
                {semesterData.courses.map((course, courseIndex) => (
                  <tr
                    key={courseIndex}
                    className={`${
                      courseIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-b border-2 hover:bg-blue-100 transition duration-150 ease-in-out`}
                  >
                    {/* Merge cells for semester and student name */}
                    {courseIndex === 0 && (
                      <td
                        rowSpan={semesterData.courses.length}
                        className="py-3 px-2 text-center text-blue-700 font-semibold align-middle bg-gray-50"
                      >
                        {semesterData.semester}
                      </td>
                    )}
                    {courseIndex === 0 && (
                      <td
                        rowSpan={semesterData.courses.length}
                        className="py-3 px-2 text-center font-medium align-middle bg-gray-50"
                      >
                        {semesterData.studentName}
                      </td>
                    )}
                    <td className="py-3 px-4">{course.courseName}</td>
                    <td className="py-3 px-4 text-center">{course.credits}</td>
                    <td className="py-3 px-4 text-center">{course.grade}</td>
                    <td className="py-3 px-4 text-center">{course.gradePoint}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
          {/* Footer */}
          <tfoot className="bg-blue-500 text-white">
            <tr>
              <td colSpan={3} className="py-2 px-4 text-center font-bold">
                Cumulative GPA
              </td>
              <td colSpan={3} className="py-2 px-4 text-center font-bold">
                {calculateStudentCGPA(grades, "Kiran")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      </div>
  );
}

export default Gradesheet;