import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" 
import { useState } from 'react';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL ="http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "21f4415461d1b80ef61f18c8c2496d71"

let getWeatherInfo =async ()=>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
    }catch(err){
        throw err;
    }
};

let handleChange = (event) =>{
    setCity(event.target.value);
}

let handleSubmit = async (event) =>{
    try{
        event.preventDefault();
        console.log(city)
        setCity("")
        let newinfo = await getWeatherInfo()
        updateInfo(newinfo)
    }catch(error){
        setError(true)

    }
    
}

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city}  onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit" >SEARCH</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}