import React, { useState } from 'react';
import { useRef , useState} from 'react';
const RefEx=()=>{
    const count=useRef(0);
    const [count1,setcount1]=useState(0);
    function increment(){
        count.current++;
        console.log(count.current)
        setcount1(count1+1)
    }
    return (
        <div>
            <h1>Ref Counter:{count.current}</h1>
            <h1>Ref Counter:{count1}</h1>
            <button onClick={increment}>Increase</button>
        </div>
    )
}
export default RefEx