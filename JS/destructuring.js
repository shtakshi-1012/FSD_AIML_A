const person={
    name:"nik",
    age:34,
    salary: 123455.78,
}
console.log(person.name);
console.log(person.age);
console.log(person.salary);

//destructuring on object
const {name,age,salary}=person;
// it created a variable name=person.name, age=person.age, and so on
console.log(name);
console.log(age);
console.log(salary);

// detsructuring on array
const emp=["abe", 33, 47398.90, "hdi"];
const [name1, age1, salary1, city]=emp;
console.log(name1);
console.log(age1);
console.log(salary1);
console.log(city);
