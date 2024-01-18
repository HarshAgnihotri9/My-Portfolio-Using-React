// import React from 'react';
// import './Navbar.css';
import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [width,setwidth]=useState(window.innerWidth)
    const[repp,setrepp]=useState({})
    const[flag,setflag]=useState(0)

    useEffect(() => {
        const handleResize = () => {
          setwidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        })
 
    useEffect(() => {
      if(width<870 && flag==0){
        setrepp({visibility:"hidden"})
        setflag(1)
      }
      if(width>870 && flag==1){

          setrepp({visibility:'inherit'})
          setflag(0)
        }
      

    }, [width])
    
  return (
   <>
   <div className="navbar">
    <div className='left'>
       <h2>   Harsh Agnihotri</h2>
    </div>
    <div className='right'>
        <nav>

        <ul>
            <li style={{display:repp.display,visibility:repp.visibility}}><a href="">Home</a></li>
            <li style={{display:repp.display , visibility:repp.visibility}}><a href="">About</a></li>
            <li style={{display:repp.display , visibility:repp.visibility}}><a href="">Projects</a></li>
            <li style={{display:repp.display , visibility:repp.visibility}}><a href="">My Resume</a></li>
            <li style={{display:repp.display , visibility:repp.visibility}}><a href="">More</a></li>
            <img src="./src/Components/sort.png" alt="" />
        </ul>
        </nav>
    </div>
   </div>
   
   </>
  )
}

export default Navbar