import React from "react"

function Profile(){
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    )
  }
  
  function Gallery(){
    return (
      <div>
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </div>
    )
  }

  export default Gallery;