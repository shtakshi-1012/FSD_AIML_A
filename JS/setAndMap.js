// Map
const myMap= new Map([
    ["key1",123],
    [34,"js"]
]);
console.log(myMap.get(34));
console.log(myMap.get("key1"));

myMap.set("key2","java");
myMap.set("key3",128.90);
myMap.set("key4","java4");
myMap.set("key5","java5");
console.log(myMap.get("key2"));
console.log(myMap.get("key3"));

console.log("map= ", myMap);

// Sets
const mySet= new Set();
console.log(mySet);
mySet.add(23);
mySet.add(34);
mySet.add(23);
console.log(mySet);
// no filter function for Sets
const a1=mySet.filter((n)=>{n%2===0})

// use loop for traversing
// console.log(mySet[0]); this will show undefined

// print all the even numbers using filter on array
let arr=[1,2,3,4,5,8]
let even1=arr.filter((n)=>(n%2===0));
let even=arr.filter((ele)=>{
    return (ele%2==0);
})
console.log(even);
console.log(even1);

// map function
// let map1=arr.map((n)=>{
//     return (n*2);
// });
// console.log(map1);

// reduce function
const reduce1=arr.reduce((s,n)=>{
    // console.log("n=",n);
    return s+n;
});
console.log(reduce1);

