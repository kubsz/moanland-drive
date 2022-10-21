import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CreateMoan from './routes/CreateMoan';
import Dashboard from './routes/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />
	},
	{
		path: 'moan',
		element: <CreateMoan />
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
