import React, {Component} from 'react'
import '../style.css'
import { withWeather } from "../context/WeatherProvider"


function SummaryDisplay(props){
    if (props.currently && props.daily) {
        return (
            <div className="summary-display">
                <h3>Current Summary</h3>
                <span>{props.currently.summary}</span>
                <span>{props.currently.temperature}°F </span>
                <span>High: {props.daily.data[0].temperatureHigh}°F</span>
                <span>Low: {props.daily.data[0].temperatureLow}°F</span>
                <span>Feels Like: {props.currently.apparentTemperature}</span>
            </div>
        )
    } else{
        return(
            <div>
                <h3>No Summary to display</h3>
            </div>
        )
    }
}


export default withWeather(SummaryDisplay)