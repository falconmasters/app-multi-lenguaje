import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './styles.css';

const App = () => {
	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">Bienvenido, Carlos</h1>
				<p className="subtitulo">Viernes 23 de Abril de 2020</p>
				
				<Grid />
			</div>
		</div>
	);
}
 
export default App;