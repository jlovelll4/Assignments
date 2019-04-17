import { Route, Link} from 'react-router-dom'
import React from "react"
import CurrentConditionsDisplay from "./CurrentConditionsDisplay"
import SummaryDisplay from "./SummaryDisplay"
import HourlyScroll from "./HourlyScroll"
import DailyForecast from "./DailyForecast"
import "../style.css"
import { withWeather } from "../context/WeatherProvider"

function WeatherList(props){
    if (props.currently){
        let currentIcon
        console.log("../climacons-master/SVG/Sun.svg")
        switch(props.currently.icon) {
            case "clear":
                currentIcon = require("../climacons-master/SVG/Sun.svg")
                break;
            case "clear-night":
                currentIcon = "../climacons-master/SVG/Moon.svg"
                break;
            case "partly-cloudy-day":
                currentIcon = "../climacons-master/SVG/Cloud-Sun.svg"
                break;
            case "partly-cloudy-night":
                currentIcon = "../climacons-master/SVG/Cloud-Moon.svg"
                break;
            case "cloudy":
                currentIcon =  "../climacons-master/SVG/Cloud.svg"
                break;
            case "rain":
                currentIcon =  "../climacons-master/SVG/Cloud-Rain.svg"
                break;
            case "sleet":
                currentIcon =  "../climacons-master/SVG/Cloud-Hail.svg"
                break;
            case "snow":
                currentIcon =  "../climacons-master/SVG/Cloud-Snow-Alt.svg"
                break;
            case "wind":
                currentIcon =  "../climacons-master/SVG/Cloud-Wind.svg"
                break;
            case "fog":
                currentIcon =  "../climacons-master/SVG/Cloud-fog.svg"
                break;
            default:
                console.log("No match found for icon.")
        }
        return(
            <div className="display-container">
                <Route path="/CurrentSummary" component={SummaryDisplay}/>
                <Route path="/Hourly" component={HourlyScroll}/>
                <Route path="/Daily" component={DailyForecast}/>
                <Route path="/CurrentConditions" render={(rProps) => <CurrentConditionsDisplay currentIcon={currentIcon} {...rProps} />}/>
            </div>
        )
    } else {
        return(
            <div className="display-container">
                <Route path="/CurrentSummary" component={SummaryDisplay}/>
                <Route path="/Hourly" component={HourlyScroll}/>
                <Route path="/Daily" component={DailyForecast}/>
                <Route path="/CurrentConditions" component={CurrentConditionsDisplay}/>
            </div>
        )
    }



}

export default withWeather(WeatherList)