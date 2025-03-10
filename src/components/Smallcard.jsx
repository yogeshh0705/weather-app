import React from 'react'
import './small.css'

const Smallcard = () => {

    const date =new Date();

    const theTime=date.toLocaleTimeString(navigator.language,{
        hour:'numeric',
        minute:'numeric'
    });
  return (
        <div className='container-small'>

            <div className='up' >
                <div   className='time'><p> 
                    {theTime}</p>   
                    <img src='https://i.ibb.co/PsSZ4fLp/sun-1-removebg-preview.png' alt="" id='card-img'/>
                    
                    </div>
                
                    </div>
                 
            
           
            

            <div className='down'> </div>
            


        


        </div>
      


   
  )
}

export default Smallcard
