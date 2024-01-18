// import React from 'react'
import ForthPage from '../Components/Component4/ForthPage'
import './Component5.css'

function Component5() {
    let arr=['HTML' ,'CSS' , 'JavaScript ', 'React JS' , 'Tailwind', 'Bootstrap']
    let arrr =['Figma', 'Adobe Photoshop', 'AI']
    let arrrr =[  'HTML' ,'CSS' , 'JavaScript ', 'React JS' , 'Tailwind', 'Bootstrap', 'GIT', 'GITHUB' ]
  return (
    <>
     <div className="mains">

<ForthPage title="Frontend Developer" heading="I like to code things from  scratch, and enjoy bringing ideas to life in the browser." heading2="Things I enjoy develope:" heading3="Portfolio Websites, E-Commerce, and others" heading4="Dev Tools" heading5 = {arr}  />
<ForthPage title="Web Designer" heading="I like to make the design from scratch with the HElp of figma" heading2="Things I enjoy develope:" heading3="Portfolio Websites, E-Commerce, and others"   heading4="Dev Tools" heading5 = {arrr}/>
<ForthPage title="Mentor" heading="I like to teach students about Web Dev and Web design from scratch " heading2="Things I enjoy Teaching:" heading3="WEB DEVELOPEMENT AND WEB DESIGN"  heading4="Things i Teach" heading5 = {arrrr}/>


</div>
    </>
  )
}

export default Component5