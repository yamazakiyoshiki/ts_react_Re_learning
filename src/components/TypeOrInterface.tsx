type StudentType = {
  id: string;
  name: string;
  age: number;
};

type NewStudentType = {
  sports: string;
} & StudentType;

// interface StudentInterface {
//   id: string;
//   name: string;
//   age: number;
// }

// interface NewStudentInterface extends StudentInterface {
//   sports: string;
// }

const studentA: NewStudentType = {
  id: "0001",
  name: "yamazaki",
  age: 26,
  sports: "baseball",
};

console.log(studentA);
