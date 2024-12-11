import React from 'react'
import Child2 from './Child2'
import {StudentContext} from "./Parent"

function Child1 () {
  return (
    <div><h1>Child1 Component</h1>
    {/* <Child2 student={student}/> */}
    <Child2/>
    </div>
  )
}

export default Child1
