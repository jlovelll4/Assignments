import React from 'react'
import '../style.css'
import {withWeather } from "../context/WeatherProvider"

function HourlyScroll(props){
    if (props.hourly) {
        return (
            <div className="hourly-display">
            <span>
                Icon: {props.hourly.data[0].icon}
                Temp: {props.hourly.data[0].temperature}
                Time: {props.hourly.data[0].time}
            </span>
                <span>
                Icon: {props.hourly.data[1].icon}
                    Temp: {props.hourly.data[1].temperature}
                    Time: {props.hourly.data[1].time}
            </span>
                <span>
                Icon: {props.hourly.data[2].icon}
                    Temp: {props.hourly.data[2].temperature}
                    Time: {props.hourly.data[2].time}
            </span>
                <span>
                Icon: {props.hourly.data[3].icon}
                    Temp: {props.hourly.data[3].temperature}
                    Time: {props.hourly.data[3].time}
            </span>
                <span>
                Icon: {props.hourly.data[4].icon}
                    Temp: {props.hourly.data[4].temperature}
                    Time: {props.hourly.data[4].time}
            </span>
                <span>
                Icon: {props.hourly.data[5].icon}
                    Temp: {props.hourly.data[5].temperature}
                    Time: {props.hourly.data[5].time}
            </span>
                <span>
                Icon: {props.hourly.data[6].icon}
                    Temp: {props.hourly.data[6].temperature}
                    Time: {props.hourly.data[6].time}
            </span>
                <span>
                Icon: {props.hourly.data[7].icon}
                    Temp: {props.hourly.data[7].temperature}
                    Time: {props.hourly.data[7].time}
            </span>
                <span>
                Icon: {props.hourly.data[8].icon}
                    Temp: {props.hourly.data[8].temperature}
                    Time: {props.hourly.data[8].time}
            </span>
                <span>
                Icon: {props.hourly.data[9].icon}
                    Temp: {props.hourly.data[9].temperature}
                    Time: {props.hourly.data[9].time}
            </span>
                <span>
                Icon: {props.hourly.data[10].icon}
                    Temp: {props.hourly.data[10].temperature}
                    Time: {props.hourly.data[10].time}
            </span>
                <span>
                Icon: {props.hourly.data[11].icon}
                    Temp: {props.hourly.data[11].temperature}
                    Time: {props.hourly.data[11].time}
            </span>
                <span>
                Icon: {props.hourly.data[12].icon}
                    Temp: {props.hourly.data[12].temperature}
                    Time: {props.hourly.data[12].time}
            </span>
                <span>
                Icon: {props.hourly.data[13].icon}
                    Temp: {props.hourly.data[13].temperature}
                    Time: {props.hourly.data[13].time}
            </span>
                <span>
                Icon: {props.hourly.data[14].icon}
                    Temp: {props.hourly.data[14].temperature}
                    Time: {props.hourly.data[14].time}
            </span>
                <span>
                Icon: {props.hourly.data[15].icon}
                    Temp: {props.hourly.data[15].temperature}
                    Time: {props.hourly.data[15].time}
            </span>
                <span>
                Icon: {props.hourly.data[16].icon}
                    Temp: {props.hourly.data[16].temperature}
                    Time: {props.hourly.data[16].time}
            </span>
                <span>
                Icon: {props.hourly.data[17].icon}
                    Temp: {props.hourly.data[17].temperature}
                    Time: {props.hourly.data[17].time}
            </span>
                <span>
                Icon: {props.hourly.data[18].icon}
                    Temp: {props.hourly.data[18].temperature}
                    Time: {props.hourly.data[18].time}
            </span>
                <span>
                Icon: {props.hourly.data[19].icon}
                    Temp: {props.hourly.data[19].temperature}
                    Time: {props.hourly.data[19].time}
            </span>
                <span>
                Icon: {props.hourly.data[20].icon}
                    Temp: {props.hourly.data[20].temperature}
                    Time: {props.hourly.data[20].time}
            </span>
                <span>
                Icon: {props.hourly.data[21].icon}
                    Temp: {props.hourly.data[21].temperature}
                    Time: {props.hourly.data[21].time}
            </span>
            </div>
        )
    }else{
        return(
            <div>
                <h3>No Hourly data to display.</h3>
            </div>
        )
    }
}

export default withWeather(HourlyScroll)