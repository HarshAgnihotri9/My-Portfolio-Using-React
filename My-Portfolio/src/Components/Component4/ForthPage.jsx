
// import React from 'react'
import './Forthpage.css'

function ForthPage(props ) {
  

  return (
    // <div>ForthPage</div>
    <>
    <div className="mainn">
      <div className="img"> ;
        <img src="src/Components/Component4/Webdev.png" alt="" />
      </div>
      <div className="heading"><h1> {props.title} </h1></div>
      <div className="heading1"> <h2> {props.heading}</h2> </div>
      <div className="heading3"> <h2>{props.heading2}</h2></div>
      <div className="heading4"> <h2> {props.heading3}</h2> </div>
      <div className="heading5"><h2> {props.heading4}</h2></div>
      <div className="heading6"><h2>{props.heading5[0]} <br /> {props.heading5[1]} <br />  {props.heading5[2]} <br />  {props.heading5[3]} <br />  {props.heading5[4]} <br />   {props.heading5[5]} </h2> </div>

    </div>
    
    </>
  )
}

export default ForthPage