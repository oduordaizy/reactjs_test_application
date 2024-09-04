import React from "react"

function MyButton(){
  return (
    <button>
      This is my button
    </button>
  )
}

function App(){
  return (
    <div>
      <h1>Welcome to my first react Application</h1>
      <MyButton></MyButton>
    </div>
  )
}

export default App; //specifies the main component in the file
