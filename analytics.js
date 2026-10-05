export function calculateClassAverage(students, courseId) {
  let total_grade = 0;
  let student_count = 0;
  for(const student of students){
    const course=student.courses.find(c => c.courseId === courseId);
    if (course){
      total_grade += course.grade;
      student_count++;
    }
  }
  if(student_count===0)
    return 0;
  return+(total_grade / student_count).toFixed(2);
}
export function findTopStudent(students){
  if(students.length===0)
    return null;
  return students.reduce((top,current) =>{
    return (current.getAverage() > top.getAverage()) ? current : top;
  });
}
export function filterStudents(students, criteriaFn){
  const filteredList=[];
  for (const student of students){
    if (criteriaFn(student)){
      filteredList.push(student);
    }
  }
  return filteredList;
}