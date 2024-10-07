import getListStudents from './0-get_list_students';

export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((ar) => ar.id);
  }
  return [];
}
