import SearchBox from "./SearchBox";
import { useState } from "react";
import InfoBox from './InfoBox';
export default function WeatherApp(){

    const [weatherInfo , setweatherInfo] = useState({
        city : "Delhi",
        temp : 33,
        tempMin : 22,
        tempMax : 55,
        weather : "shattered clouds",
        humidity : 77,
        feelsLike : 100,
    })

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp">
            <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}