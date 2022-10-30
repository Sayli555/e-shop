import React from 'react';
import Typewriter from "typewriter-effect";
import "./typerighte.css"

const TextTypewriter = ({first,second}) => {
  return (
    <div className='typerighte'>
       <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString(first)
    
  .pauseFor(1000)
  .deleteAll()
  .typeString(second)
  .start();
  }}
  />
    </div>
  )
}

export default TextTypewriter
