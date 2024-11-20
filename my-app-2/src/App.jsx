import React from 'react'
import Ques from './quesBank';
function App() {
  return (
    <div>
      <h1>My Quiz Application</h1>
      <h2>Question 1: {Ques.question}</h2>
      <h3>{Ques.option1}</h3>
      <h3>{Ques.option2}</h3>
      <h3>{Ques.option3}</h3>
      <h3>{Ques.option4}</h3>
    </div>
  )
}

export default App