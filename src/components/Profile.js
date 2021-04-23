import React from 'react';
import Header from './Header';
import Grid from './Grid';

const Profile = () => {
	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">Perfil</h1>

				<Grid />
			</div>
		</div>
	);
}
 
export default Profile;