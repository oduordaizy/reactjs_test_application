import React from "react";
import Gallery from './Gallery.js'

function AboutPage(){
  return(
    <>
    <h1>About</h1>
    <p>Hello there <br />How do you do? </p>
    </>
  )
}

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
      <AboutPage></AboutPage>
      <MyButton></MyButton>
      <Gallery></Gallery>
    </div>
  )
}


export default App; //specifies the main component in the file
