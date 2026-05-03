export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentsList.map((student) => {
    if (student.location === city) {
      const grade = newGrades.filter((g) => g.studentId === student.id);
      if (grade.length > 0) {
        return { ...student, grade: grade[0].grade };
      }
    }
    return student;
  });
}