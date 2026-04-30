import getListStudents from './0-get_list_students';

export default function getListStudentIds() {
    return getListStudents().map((student) => student.id);
}