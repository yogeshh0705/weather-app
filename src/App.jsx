  import { useRef, useState } from 'react'
  import React from 'react'
  import reactDOM from "react-dom"
  import './App.css'
  import {BrowserRouter, NavLink, Route,Routes, UNSAFE_NavigationContext} from "react-router-dom"
  import Today from './routes/Today'
  import Tomorrow from './routes/Tomorrow'
  import Monthly from './routes/Monthly'
  import { Link } from 'react-router-dom'
  import sun from './assets/sun.png'
  import FormGroup from '@mui/material/FormGroup';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Switch from '@mui/material/Switch';
  import Data from "./assets/mock_data.json"
  import { keyframes } from '@emotion/react'
  import Maincard from './components/Maincard'
  import Side from './components/Side'
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";
import Smallcard from './components/Smallcard'
import 'typeface-poppins'




  
  








  export  function  SwitchLabels() {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="°C." />

      </FormGroup>
    );
  }





  function App() {


    const slideRef=useRef();

    const goNext=()=>{
      slideRef.current.slickNext();
    }

    const goPrev=()=>{
      slideRef.current.slickPrev();
    }







    const [query,SetQuery] = useState("");

    const date=new Date();
    const showTime=date.getHours()
    + ":" + date.getMinutes();

    const settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,



    };
    

  // slide buttons for front and back movement



    return (
      <>
      <div className='container'>

        <div className='header'>
        <div className='logoclass'>
            <img src={sun} alt="logo"  id='sunlogo'/>
            <h1>Weather app</h1>
            


          </div>

        <div className='tabs'>
        <BrowserRouter>

  <nav>
    <NavLink to="/td" className={({isActive}) => (isActive ? "active-link": "")}> Today</NavLink>
    <NavLink to="/tm" className={({isActive}) => (isActive ? "active-link": "")}> Tomorrow</NavLink>
    <NavLink to="/mt" className={({isActive}) => (isActive ? "active-link": "")}> Monthly</NavLink>
  </nav>
  <Routes>


    <Route path="/td" element={<Today/>} >    </Route>
    <Route path='/tm' element={<Tomorrow/>}>  </Route>
    <Route path='/mt' element={<Monthly/>  }>   </Route>         
    </Routes></BrowserRouter>

        </div>
        </div>
        <h4 style={{paddingLeft:'19rem'}}>{showTime}</h4>

        <div className='degree-switch'>
        <h4>°F</h4><SwitchLabels/>
        </div>
        <div>
          <input type="search" placeholder='search location here...'  
          onChange={(e)=> SetQuery(e.target.value)} 
          value={query}/>
          { <div className='card-collection'>

          {/* { 
          Data.length && Data.filter((location)=>{
            if(query==""){
              return location;
            }
            else if(location.country.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
              return location;
            }
          }).map((location)=>(
              <div className='cards' key={location.country}>

                <h3>{location.country}</h3>
                </div>
              ))
          } */}

          </div> }

          </div>

          {/* <div className='slide-card'>

          <Side/>
          <button id='left-btn'>
          <img src="https://i.ibb.co/Wv4Bt3cs/back.png" /> 
          </button>


          <Maincard/>

          <button id='left-btn'>
          <img src="https://i.ibb.co/LX6WLYMf/right.png"  /> 
          </button>

          <Side/>

          </div> */}
          <div className='sliders'>
            

          

          <div  className='mainslide'><Slider  ref={slideRef} {...settings}>

            
            
            <Maincard></Maincard>
            <Maincard>
              
            </Maincard>
        
 
                  </Slider></div>
                 
          </div>


          <div className='last-class'>
          <Smallcard></Smallcard>
          <Smallcard></Smallcard>
   
          <Smallcard></Smallcard>
   
          <Smallcard></Smallcard>
   
          <Smallcard></Smallcard>
          <Smallcard></Smallcard>
          <Smallcard></Smallcard>
            
   
   
   


          </div>

         

          </div>


  
      </>
    )

    
  }

  export default App
