import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter} from 'react-router-dom'
import BountyProvider from './context/BountyProvider'

ReactDOM.render(
    <BrowserRouter>
        <BountyProvider>
            <App />
        </BountyProvider>
    </BrowserRouter>,
     document.getElementById('root'))