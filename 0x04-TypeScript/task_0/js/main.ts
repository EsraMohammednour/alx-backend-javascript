interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: "esra",
  lastName: "nour",
  age: 33,
  location: "kassala"
}

const s2: Student = {
  firstName: "atika",
  lastName: "musa",
  age: 28,
  location: "sudia arabia"
}

const studentsList: Student[] = [ s1, s2 ];
