import React, { createContext } from 'react'
import Child1 from './Child1'

const StudentContext=createContext();
function Parent() {
    const stu={
        name:"ABC",
        age:23
    }
  return (
    <StudentContext.Provider value={stu}>
            <div>
        <h1>Parent Component</h1>
        <Child1 student={stu}/>
    </div>

    </StudentContext.Provider>

/* <div>
<h1>Parent Component</h1>
<Child1 student={stu}/>
</div> */

  )
}

export default Parent