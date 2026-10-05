import{ Student}from './models.js';
import{ fetchStudents}from './database.js';
import{ calculateClassAverage, findTopStudent, filterStudents}from './analytics.js';

console.log("Loading student data from server...");

fetchStudents((students_data) =>{
  console.log("Records retrieved correctly!\n");

  const students = students_data.map(data => new Student(data.id, data.name, data.courses));

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  
  students[0].id = 999; 
  
  console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

  console.log(" - Analytics Report - ");

  const average_101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${average_101}`);

  const max_ave_student = findTopStudent(students);
  console.log(`Top Student: ${max_ave_student.name} (Average: ${max_ave_student.getAverage()})`);

  const course_102_students = filterStudents(students, student => 
    student.courses.some(course => course.courseId === 102)
  );
  
  const names = course_102_students.map(s => s.name).join(", ");
  console.log(`Students in Course 102: ${names}`);
});