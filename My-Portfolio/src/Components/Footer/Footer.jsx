import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
   
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!--GOOGLE FONTS-->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 
</head>
<body> */}
<footer>
<div className="footer">
<div className="row">
<a href="#"><i className="fa fa-facebook"> <img  style={{width:'3%'}} src="./src/Components/Footer/fb.png" alt="" /></i></a>
<a href="#"><i className="fa fa-instagram"> <img style={{width:'3%'}}  src="./src/Components/Footer/insta.png" alt="" /></i></a>
<a href="#"><i className="fa fa-youtube"> <img   style={{width:'3%'}} src="./src/Components/Footer/linkdin.png" alt="" /></i></a>
{/* <a href="#"><i className="fa fa-twitter"> <img   style={{width:'3%'}} src="./src/Components/Footer/fb.png" alt="" /></i></a> */}
</div>

<div className="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
{/* <li><a href="#">Career</a></li> */}
</ul>
</div>

<div className="row">
Its all about my Portfolio Website  || Made by:Harsh Agnihotri
 </div>
</div>
</footer>


Resources
    </>
  )
}

export default Footer