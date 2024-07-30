import WeatherIcon from "./WeatherIcon/WeatherIcon";

const WeatherData = (props) => {
    return (
        <>
            <h2>{props.day}</h2>
            <WeatherIcon img={props} />
            <p><span>conditions: </span>{props.conditions}</p>
            <p><span>time: </span>{props.time}</p> 
        </> 
    )
}
export default WeatherData;