    let cityInput= document.getElementById('city_input'),
    searchBTN= document.getElementById('searchBTN'),
    api_key='cc05ba7a2eeb118bdd9cd01d9f8bbacb';


    function getcitycoordinates() {
        let cityName = cityInput.value.trim();
        console.log('Searching for city:', cityName);
    
        if (cityName === "") {
            alert('Please enter a city name');
            return;
        }
    }
    
    searchBTN.addEventListener('click',getcitycoordinates)