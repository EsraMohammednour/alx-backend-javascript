interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  [property: string]: any;
  location: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface printTeacherFunction {
  (firtName: string, lastName: string): string;
}

function printTeacher(firtName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
