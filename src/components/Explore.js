import React from 'react';
import Header from './Header';
import Grid from './Grid';
import {FormattedMessage} from 'react-intl';

const Explore = () => {
	return (
		<div>
			<Header />
			<div className="main">
				<h1 className="titulo">
					<FormattedMessage
						id="explore.title"
						defaultMessage="Explorar"
					/>
				</h1>

				<Grid />
			</div>
		</div>
	);
}
 
export default Explore;