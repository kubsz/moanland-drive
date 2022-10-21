import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateMoan from './routes/CreateMoan';
import Dashboard from './routes/Dashboard';
import './scss/main.scss';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" component={Dashboard} />
				{/* <Route path="/moan" component={CreateMoan} /> */}
			</Routes>
		</Router>
	);
};

export default App;
