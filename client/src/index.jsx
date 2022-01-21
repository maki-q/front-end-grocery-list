// TODO: Render the `App` component to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import groceriesData from './data/groceriesData';

ReactDOM.render(<App groceriesData={groceriesData}/>, document.getElementById('app'));