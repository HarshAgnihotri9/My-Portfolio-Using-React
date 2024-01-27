// import React from 'react'
import { useEffect, useState } from 'react'
import './FirstPage.css'

function FirstPage() {
    // const [text,settext] =useState('')
    
    function TextChange(){
         let text= document.querySelector('.Textchange')
       
        setInterval(()=>{
            text.textContent='Web Designer'
        },3000)

        setInterval(()=>{
            text.textContent='Mentor'
        },6000)
        setInterval(()=>{
            text.textContent='Web Developer'
        },9000)
      }
// 
// let arr=['Web Developer','Web Designer', 'Mentor']
   
// useEffect(()=>{
//    setInterval(()=>{
//       settext(arr[0])
//    },5000)
    
     
//    setInterval(()=>{
//     settext(arr[1])
//  },10000)

//  setInterval(()=>{
//     settext(arr[2])
//  },15000)


// },[text])

 

useEffect(()=>{
    TextChange()
},[])


   
    
  return (
    <>
    <div className="main">
        <div className="mainleft">
            <img src="./src/Components/Webdev.avif" alt="" />
        </div>
        <div className="mainright">
            <div className="firstline">
                <h2> Hii, </h2> <br />
                <h1> I  am Harsh Agnihotri </h1>
                
                <h1 className='Textchange'>  Web Developer </h1>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default FirstPage