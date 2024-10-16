// let goes with local and var goes with global
// if you initialise a variable without a keyword it by default takes var
console.log(a);
var a=12;
if(a>10){
    a=30;
    // let b=67; //b not defined
    // var b=67;
    // console.log(b);
    console.log(a);
}
console.log(a);
// console.log(b);

a=12;
b=12.5;
c=true;
d="javascript";
f=null
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(f));
console.log(Number.MAX_VALUE);

// x===y (value and type)

const hello1=(msg)=>console.log(msg);
hello1(" NEW FUNCTION");
function Hello(msg){
    console.log(msg);
};
Hello("hi world");
// default parameter
// const Add=(x,y=1,z=2)=>(x+y+z);
// console.log("sum_final", Add(23));
const Add=(x,y,z)=>(x+y+z);
console.log("sum_final", Add(23));

// it returns the value without return keyword
// arrow function mei binding karne ki zarorat nahi hoti hai
// function Add(x,y,z){
//     return (x+y+z);
// };
// const sumf=Add(2,3,4);
// console.log(" Sum= ",sumf);
// event listener
// const btn= document.querySelector("#btn");
// btn.addEventListener("onclick"), ()=>{
// };

const Person={
    name:"xyz",
    age:20
};
console.log(Person.age);
// const newPerson= Person;
// spread operator
const newPerson={ ...Person, city:"Ghaziabad"}
console.log(newPerson);
newPerson.age=35;
console.log(Person.age);
console.log(newPerson.age);

////const newEmp=[1, ...Person];
//console.log(newEmp);

// Template Literal
const firstname="hdisuk";
const lastname="dskkos";
console.log(`${firstname} ${lastname}`);

let a1=12;
if(a1>10){
    a1=30;
    let b=13;
    console.log(a);
    console.log(b);
}
console.log(a);