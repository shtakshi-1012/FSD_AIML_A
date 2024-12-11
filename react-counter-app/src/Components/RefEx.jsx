import React from 'react';
import { useRef , useState} from 'react';
const RefEx=()=>{
    console.log("Object Rendered")
    let a=5;
    const count=useRef(0);
    function handleIncrement(){
        refcount.current++;
        console.log("refcount="+refcount.current)
        if(refcount.current==5){
            alert("refcount="+refcount.current);
        }
    }
    return (
        <div>
            <h1>useRef Example</h1>
            <h1>Ref Counter:{refcount.current}</h1>
            <button onClick={handleIncrement}>Increase</button>
        </div>
    ) 

    // const [count1,setcount1]=useState(0);
    // function increment(){
    //     count.current++;
    //     console.log(count.current)
    //     setcount1(count1+1)
    // }
    // return (
    //     <div>
    //         <h1>Ref Counter:{count.current}</h1>
    //         <h1>Ref Counter:{count1}</h1>
    //         <button onClick={increment}>Increase</button>
    //     </div>
    // )
}
export default RefEx