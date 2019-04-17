import React from 'react';
import './style.css';
import { Switch, Route} from 'react-router-dom'
import LocationForm from "./containers/LocationForm"
import Header from "./containers/Header";
import cloud from "./files/clouds.webm"
import Footer from "./containers/Footer";
import WeatherList from "./containers/WeatherList"
import { withWeather } from "./context/WeatherProvider"
import Navbar from "./containers/Navbar"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="main-container">
                <video playsInline autoPlay muted  loop >
                    <source src={cloud} type="video/webm"/>
                </video>
                <Header />
                <Navbar />
                <Switch>
                    <Route
                        path="/"
                        render={routerProps =>
                        <WeatherList
                            {...routerProps}/>
                    }/>
                </Switch>
                <LocationForm />
                <Footer />
            </div>
        )
    }
}
export default withWeather(App)