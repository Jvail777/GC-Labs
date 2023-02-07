import axios from "axios";
import { Weather } from "../models/Weather";

//asynchronous
export function GetWeatherData() : Promise<Weather>{
   return  axios.get<Weather>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(Response => Response.data)
} 