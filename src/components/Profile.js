import React from 'react';
import Header from './Header';
import Grid from './Grid';
import {FormattedMessage} from 'react-intl';

const Profile = () => {
	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">
					<FormattedMessage
						id="profile.title"
						defaultMessage="Perfil"
					/>
				</h1>

				<Grid />
			</div>
		</div>
	);
}
 
export default Profile;