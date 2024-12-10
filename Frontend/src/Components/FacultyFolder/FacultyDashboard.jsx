import React from 'react';

const FacultyDashboard = () => {
    const courses = [
        {
            name: 'CSE110-Introduction to Computer Science',
            section: 'Section 30',
            faculty: 'Dr. John Doe',
            schedule: [
                { day: 'Monday', time: '8:00 - 9:30 AM' },
                { day: 'Wednesday', time: '9:00 - 10:30 AM' },
            ],
        },
        {
            name: 'MAT101-Advanced Mathematics',
            section: 'Section 21',
            faculty: 'Prof. Jane Smith',
            schedule: [
                { day: 'Tuesday', time: '11:00 - 12:30 PM' },
                { day: 'Thursday', time: '9:30 - 11:00 AM' },
            ],
        },
        {
            name: 'CSE220-Data Structure',
            section: 'Section 09',
            faculty: 'Dr. Mira',
            schedule: [
                { day: 'Tuesday', time: '1:00 - 2:30 PM' },
                { day: 'Thursday', time: '1:00 - 2:30 PM' },
            ],
        },
        {
            name: 'STAT101-Advanced Statistics',
            section: 'Section 45',
            faculty: 'Prof. Mili',
            schedule: [
                { day: 'Friday', time: '9:30 - 11:00 AM' },
            ],
        },
    ];

    return (
        <div className="p-4">
            {/* Advised Courses */}
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Assigned Courses and Section</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Course Name</th>
                            <th className="py-2 px-4 text-left">Section</th>
                            {/* <th className="py-2 px-4 text-left">schedule</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'
                                } hover:bg-blue-200`}
                            >
                                <td className="py-2 px-4">{course.name}</td>
                                <td className="py-2 px-4">{course.section}</td>
                                {/* <td className="py-2 px-4">{course.schedule}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FacultyDashboard;
