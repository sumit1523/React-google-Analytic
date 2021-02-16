import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import AppOne from './AppOne';
import AppTwo from './AppTwo';
import ReactGA from 'react-ga';

const App = () => {
	useEffect(() => {
		ReactGA.initialize('UA-189795275-1');
		// To Report Page View 
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [])
	useEffect(() => {
		console.log(window.location.pathname);
	})
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<div>
						<span><a className={'text-decoration'} href="/home" >Home</a></span>
						<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<span><a className={'text-decoration'} href="/appOne" >AppOne Page</a></span>
						<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<span><a className={'text-decoration'} href="/appTwo" >AppTwo Page</a></span>
					</div>

					<Switch>
						<Route exact path="/"  ><Home /> </Route>
						<Route exact path="/home"  ><Home /> </Route>
						<Route exact path="/appOne"  ><AppOne /> </Route>
						<Route exact path="/appTwo"  ><AppTwo /> </Route>
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
