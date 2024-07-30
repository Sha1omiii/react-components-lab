import './WeatherForecast.css'
// import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherData from './WeatherData/WeatherData';

const WeatherForecast = ( { weather } ) => {
    return (
        <>
            { weather.map((weatherItem) => 
                <div className="weather">
                    <WeatherData {...weatherItem}/>
                    {/* <WeatherIcon {...weatherItem} /> */}
                    {/* weathericon - child of weatherdata to maintain the layout */}
                </div>
            )}       
        </>
    )    
}

export default WeatherForecast;