import React, {Component} from 'react';
import axios from "axios/index";
export const WeatherContext = React.createContext()

class WeatherProvider extends Component {
    constructor(){
        super()
        this.state = {
            forecast: []
        }
    }

    getCoords = (city, st8) => {
        console.log("getCoords is being reached")
        // Retrieve latitude and longitude from MapBox API based on user entered city, state.
        const mapBoxKey = process.env.REACT_APP_MAPBOX_API_KEY
        const searchCity = city.trim().replace(" ", "%20")
        const searchState = st8.trim()
        const search = searchCity + "%20" + searchState
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?${mapBoxKey}`).then(response => {
            this.setState({
                city: city,
                st8: st8,
                longitude: response.data.features[0].center[0],
                latitude: response.data.features[0].center[1]
            }, () => this.getWeather())
        })
            .catch(err => console.log(err))
    }


     getWeather = () =>{
        // Retrieve weather data from DarkSky API.
        const darkSkyKey = process.env.REACT_APP_DARKSKY_API_KEY
        const vSchoolCors = "https://vschool-cors.herokuapp.com?url="
        axios.get(`${vSchoolCors}https://api.darksky.net/forecast/${darkSkyKey}/${this.state.latitude},${this.state.longitude}?exclude=[minutely]`).then(
            response => {
                console.log(response.data)
            this.setState( {
                forecast: response.data
            },)
        })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <WeatherContext.Provider
                value={{
                    getCoords: this.getCoords,
                    st8: this.state.st8,
                    city: this.state.city,
                    currently: this.state.forecast.currently,
                    forecast: this.state.forecast,
                    hourly: this.state.forecast.hourly,
                    daily: this.state.forecast.daily,
                    alerts: this.state.forecast.alerts,
                    flags: this.state.forecast.flags,
                }}>
                { this.props.children }
            </WeatherContext.Provider>
        )
    }
}

export default WeatherProvider
export const withWeather = C => props => (
    <WeatherContext.Consumer>
        {value => <C {...value} {...props}/>}
    </WeatherContext.Consumer>
)