import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
        <App />
,document.getElementById('root'));




