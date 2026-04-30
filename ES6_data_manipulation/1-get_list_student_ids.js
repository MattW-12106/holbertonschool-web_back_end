export default function getListStudentIds() {
    return getListStudents().map((student) => student.id);
}