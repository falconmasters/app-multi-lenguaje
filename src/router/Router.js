import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './../App';
import Explore from './../components/Explore';
import Profile from './../components/Profile';

const Router = () => {
	return (
		<div className="contenedor">
			<BrowserRouter>
				<Switch>
					<Route path="/explore" component={Explore} />
					<Route path="/profile" component={Profile} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
 
export default Router;