export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name1) {
    if (typeof name1 !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name1;
  }

  get length() {
    return this._length;
  }

  set length(length1) {
    if (typeof length1 !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length1;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (!Array.isArray(newstudents)) {
      throw new Error('Studants muust be an array');
    }
    this._students = newstudents;
  }
}
