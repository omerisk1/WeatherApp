import {createContext,useState,useEffect, children} from 'react'
import axios from 'axios'

const WeatherContext = createContext();

export const WeatherProvider = ({children}) =>{
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [city, setCity] = useState("istanbul");
    const api = "1dfa3d9c7c772c3ae219a1f106a33db5";
    const values = {
        weather,
        setWeather,
        city,
        setCity,
        forecast,
        setForecast,
    }
   
    useEffect(() =>{

            axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=7&appid=${api}`)
            .then(res =>(setWeather(res.data)))
            axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=32&units=metric&appid=${api}`)
            .then(res => setForecast(res.data))
    },[...city,setCity,setForecast])   
   
   
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}
export default WeatherContext;