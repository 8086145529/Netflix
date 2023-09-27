import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const[show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{// scroll is the event in the addEventListener and the arrow function is the Listener
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
      
    })
  })
  return (
    <div className= {`nav ${show && 'nav-black'}`}>
     
    <img width={"150px"} src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix logo" />
    </div>
        
    
  )
}

export default Nav