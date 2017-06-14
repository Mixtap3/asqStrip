import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

import { HashRouter as Router, Route} from 'react-router-dom';
import App from './components/App'

import routes from "./routes"

const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
)

console.log("inne i main")
//export const store = configureStore({});

render((
	<Provider store={store}>
    <Router>
    	<Route path="/" component={App} />
	</Router>
	</Provider>
),document.getElementById('app'));
