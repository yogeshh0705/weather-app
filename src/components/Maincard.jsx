    import React, { useEffect ,useState } from 'react'
    import "./M.css"
    import "@fontsource/poppins"; // Defaults to weight 400
    import "@fontsource/poppins/400.css"; // Specify weight
    import "@fontsource/poppins/400-italic.css"; // Specify weight and style



    const Maincard = ({query}) => {

      const date=new Date();
      const FreshDate=date.toLocaleDateString('en-GB',{
        day:'numeric',
        month:'long',
        year:'numeric'
      });

      const [temperature, setTemperature] = useState(null);
      const [humidity, setHumidity] = useState(null);
      const [airPressure, setAirPressure] = useState(null);
      const [wind, setWind] = useState(null);

      const [cityName, setcityName] = useState(null);


      const apiKey ='cc05ba7a2eeb118bdd9cd01d9f8bbacb';
      const apiUrl ='https://api.openweathermap.org/data/2.5/weather';

      useEffect(() => {
        // Fetch weather data from an API or some other source
        // For example, here's how you might fetch it from a weather API:

        fetch(`${apiUrl}?q=${query}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setTemperature(data.main.temp);
                setHumidity(data.main.humidity);
                setAirPressure(data.weather[0].description  );
                setWind(data.wind.speed);
                setcityName(data.name);

            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, [query]);


      


      // const apiKey ='cc05ba7a2eeb118bdd9cd01d9f8bbacb';
      // const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=sonipat&units=metric';
      //  async function checkWeather() {
      //   const response =await fetch(apiUrl + `&appid=${apiKey}`);
      //   var data =await response.json();

      //   console.log(data);
        
      // }

      return (



        <div className='container-1'>
          <div id='first'>

          <div className='top'> <h2 className='cityname'>{cityName !== null ? `${cityName}` : '--'}</h2> <img src="https://i.ibb.co/QvLssbTk/placeholder.png" alt="placeholder" border="0" id='locat' className='locatt'></img></div>
          </div>

          <div className='mid-content'>
            <img src="https://i.ibb.co/PGgX6z5v/clouds.png" ></img>
              <h2 className='mtemp'>{temperature !== null ? `${temperature}°C` : '--'} </h2> 
            
          <img src="https://i.ibb.co/h1TqzRh3/termomether.png" id='gauge'></img>
          </div>
          <h5> {FreshDate}</h5> 
          <div className='parameters'>
            <ul >
              
              <li className='temperature'> Temperature: <br /> {temperature !== null ? `${temperature}°C` : 'Loading...'} </li>
              <li className='humid'> Humidity: <br /> {humidity !== null ? `${humidity}%` : 'Loading...'} </li>
              <li className='ap'> Description: <br /> {airPressure !== null ? `${airPressure} ` : 'Loading...'} </li>
              <li className='ww'>Wind:<br></br> {wind !== null ? `${wind} km/h` : 'Loading...'} </li>
              
            </ul>          
            

          </div>

          
        </div>

      


      )
    }

    export default Maincard
