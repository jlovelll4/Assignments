import React from "react"
import { withWeather } from "../context/WeatherProvider"
import "../style.css"

function CurrentConditionsDisplay(props){
    if (props.currently){
        console.log("Current Conditions")
        return (
            <div className="current-conditions">
                <h2>Current Conditions</h2>
                <span><b>Feels like: </b>{props.currently.apparentTemperature}</span>
                <span> <b>Temperature: </b>{props.currently.temperature}</span>
                <span><b>Dew point: </b>{props.currently.dewPoint}</span>
                <span><b>Humidity: </b>{props.currently.humidity}</span>
                {/*<span><b>Icon: </b>{props.currentIcon}</span>*/}
                <span><b>Pressure: </b>{props.currently.pressure}</span>
                <span><b>Summary: </b>{props.currently.summary}</span>
                <span><b>Time: </b>{props.currently.time}</span>
                <span><b>UV Index: </b>{props.currently.uvIndex}</span>
                <span><b>Wind Direction: </b>{props.currently.windBearing}</span>
                <span><b>Wind Gust: </b>{props.currently.windGust}</span>
                <span><b>Wind Speed: </b>{props.currently.windSpeed}</span>
            </div>
        )
    } else{
        return(
            <div>
                <h1>No data to display.</h1>
            </div>
        )
    }
}


export default withWeather (CurrentConditionsDisplay)