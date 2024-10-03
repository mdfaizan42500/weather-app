import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useState} from "react";
export default function SearchBox({updateInfo}) {

    let [error , seterror]  = useState(false);
    let [city , setcity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d86ec28075689671f564664d4e9fecff";

    let getWeatherInfo = async ()=>{
    try{
        seterror(false);
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
      
        let result = {
           city : city,
           temp : jsonResponse.main.temp,
           tempMin : jsonResponse.main.temp_min,
           tempMax : jsonResponse.main.temp_max,
           humidity : jsonResponse.main.humidity,
           feelsLike : jsonResponse.main.feels_like,
           weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    } catch (err){
        throw err;
    }
    }
    

let handleChange = (event)=>{
    setcity(event.target.value);
}

let handleSubmit = async (event)=>{
    try{
        event.preventDefault();
    console.log(city);
   let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setcity("");
    } catch (err){
        seterror(true);
    }
}

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="filled-basic" label="City name" variant="filled" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />} size='large' type="submit" >  Search    </Button>

            {error && <p style={{color : "red"}}>No such place found</p>}

            </form>
            

        </div>
    )
}