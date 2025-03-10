import React from 'react'
import "./M.css"
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style



const Maincard = () => {

  const date=new Date();
   const FreshDate=date.toLocaleDateString('en-GB',{
    day:'numeric',
    month:'long',
    year:'numeric'
   });

  return (



    <div className='container-1'>
      <div id='first'>

      <div className='top'> <h2>Gurugram </h2> <img src="https://i.ibb.co/QvLssbTk/placeholder.png" alt="placeholder" border="0" id='locat'></img></div>
      </div>

      <div className='mid-content'>
        <img src="https://i.ibb.co/PGgX6z5v/clouds.png" ></img>
        <label> Temp</label>
      <img src="https://i.ibb.co/h1TqzRh3/termomether.png" id='gauge'></img>
      </div>
      <h5> {FreshDate}</h5> 
      <div className='parameters'>
        <ul >
          
          <li> Temp  {}   </li>
          <li> Humidity {}</li>
          <li>Air-Preassure {} </li>
          <li>Wind {} </li>
          
        </ul>
        
        

      </div>

      
    </div>

  


  )
}

export default Maincard
