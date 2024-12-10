import React from 'react';
const studentCourses = [
    { studentId: "S101", courseCode: "CS101" },
    { studentId: "S102", courseCode: "CS102" },
    { studentId: "S103", courseCode: "CS103" },
    { studentId: "S104", courseCode: "CS104" },
    { studentId: "S105", courseCode: "CS105" },
    { studentId: "S106", courseCode: "CS106" },
  ];

  
const Material = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {[...Array(6)].map((_, index) => (
    <div key={index} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Course Name {index + 1}</h2>
        <p>
          This course covers the fundamentals of modern education and technology to empower learners with advanced skills.
        </p>
        <div className="card-actions justify-between">
          <a href="/course-link" className="btn btn-primary">Go to Link</a>
          <button className="btn btn-secondary">View More</button>
        </div>
      </div>
    </div>
  ))}
</div>

    );
};

export default Material;