const student={
    name: "hik",
    branch:"cs",
    sec:"A",
}
console.log(student);

//copy of the object (referencing)
// const newStudent=student;
// newStudent.name="Agjl";
// reflects the changes in both the object thus we use spread operator
// console.log(newStudent);
// console.log(student);

// const newStudent1={...student};
// newStudent1.name="Agjl";
// console.log(newStudent1);
console.log(student);

const newStudent2={id:101, ...student, sec:"B"};
console.log(newStudent2);
console.log(student);

// copy of array
const emp=["ahjk", 67, 189.9];
console.log(emp);
const emp1=[101, ...emp];
console.log(emp1);