import React from "react";
import Gallery from './Gallery.js'
import {Profile} from './Gallery.js'

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

//dynamically specifying attributes within the JSX file
function Avatar(){
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return(
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />

  )

}

function ToDoList(){
  const name = "Daisy";
  return(
    <p>This is {name}'s To Do List</p>
  )
}

const today = new Date();

function FormatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday:'long'}
  ).format(date)

}

function NewToDoList(){
  return (
    <ul style={{ 
      backgroundColor: "#363737 ",
      color: 'white'   
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol fuelled engine</li>

    </ul>
  )
}

function App(){
  return (
    <div>
      <h1>Welcome to my first react Application</h1>
      <AboutPage></AboutPage>
      <MyButton></MyButton>
      <Gallery></Gallery>
      <h1>Avatar dynamic image</h1>
      <Avatar></Avatar>
      <ToDoList></ToDoList>
      <h1> To Do list for {FormatDate(today)}</h1>
      <NewToDoList></NewToDoList>
    </div>
  )
}


export default App; //specifies the main component in the file
