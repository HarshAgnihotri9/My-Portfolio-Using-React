// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import About from './About/About'
import './App.css'
import Component5 from './Component5/Component5'
import Secondpage from './Components/Component3/Secondpage'
import ForthPage from './Components/Component4/ForthPage'
import FirstPage from './Components/FirstPage'
import Navbar from './Components/Navbar'

function App() {
  // const [count, setCount] = useState(0)
  let arr=['HTML' ,'CSS' , 'JavaScript ', 'React JS' , 'Tailwind', 'Bootstrap']
  let arrr =['Figma', 'Adobe Photoshop', 'AI']
  let arrrr =[  'HTML' ,'CSS' , 'JavaScript ', 'React JS' , 'Tailwind', 'Bootstrap', 'GIT', 'GITHUB' ]

  return (
    <>
     {/* <Navbar/> 
      <FirstPage/>
      <Secondpage/>
      <div className="mains" style={{gap:0}}>

<ForthPage title="Frontend Developer" heading="I like to code things from  scratch, and enjoy bringing ideas to life in the browser." heading2="Things I enjoy develope:" heading3="Portfolio Websites, E-Commerce, and others" heading4="Dev Tools" heading5 = {arr}  />
<ForthPage title="Web Designer" heading="I like to make the design from scratch with the HElp of figma" heading2="Things I enjoy develope:" heading3="Portfolio Websites, E-Commerce, and others"   heading4="Dev Tools" heading5 = {arrr}/>
<ForthPage title="Mentor" heading="I like to teach students about Web Dev and Web design from scratch " heading2="Things I enjoy Teaching:" heading3="WEB DEVELOPEMENT AND WEB DESIGN"  heading4="Things i Teach" heading5 = {arrrr}/>


</div> */}
<About/>

    </>
  )
}

export default App
