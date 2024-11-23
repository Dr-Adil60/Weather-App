import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox.jsx"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:25,
    weather:"haze",
    })

let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo)
}

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Dr-Adil</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}