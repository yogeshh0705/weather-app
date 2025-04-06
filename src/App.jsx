  import { useRef, useState } from 'react'
  import React from 'react'
  import reactDOM from "react-dom"
  import './App.css'
  import {BrowserRouter, NavLink, Route,Routes, UNSAFE_NavigationContext, useNavigation} from "react-router-dom"
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
  import { useNavigate } from 'react-router-dom'





  
  








  export  function  SwitchLabels() {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="°C." />

      </FormGroup>
    );
  }






  function App() {

    const apiKey ='cc05ba7a2eeb118bdd9cd01d9f8bbacb';
    const apiUrl ='https://api.openweathermap.org/data/2.5/weather';

    async function checkWeather() {
      const response =await fetch(`${apiUrl}?q=${query}&appid=${apiKey}&units=metric`);
      var data =await response.json();

      console.log(data);
      
      
    }


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
            
           Weather app
            


          </div>

        <div className='tabs'>
        <BrowserRouter>

  <nav className='navbar'>
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
        <h4  className='timer'>{showTime}</h4>

        <div className='degree-switch'>
        <h4 className='faren'>°F</h4><SwitchLabels/>
        </div>
        <div className='searching'>
          <input type="search" className='inpi' placeholder='search location here...'  id='city_input'
          onChange={(e)=> SetQuery(e.target.value)} 
          value={query}/>
          <button id='searchBTN' onClick={checkWeather}> search</button>
          { <div className='card-collection'>

         
          </div> }

          </div>

 
          <div className='sliders'>
            

          

          <div  className='mainslide'><Slider  ref={slideRef} {...settings}>

            
            
            <Maincard query={query}> </Maincard>
            <Maincard query={query}>
              
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
