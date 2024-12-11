import React from 'react'
import Child3 from './Child3'
import { StudentContext } from './Parent'

function Child2() {
  return (
    <div><h1>Child2 Component</h1>
    {/* <Child3 student={student}/> */}
    <Child3/>
    </div>
  )
}

export default Child2