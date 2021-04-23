import React from 'react';
import Header from './Header';
import Grid from './Grid';

const Explore = () => {
	return (
		<div>
			<Header />
			<div className="main">
				<h1 className="titulo">Explorar</h1>

				<Grid />
			</div>
		</div>
	);
}
 
export default Explore;