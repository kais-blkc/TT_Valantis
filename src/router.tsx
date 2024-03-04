import { HomePage } from '@/1_pages/HomePage';
import { FilterPage } from '@/1_pages/FilterPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/:page',
			element: <HomePage />,
		},
		{
			path: '/filter/',
			element: <FilterPage />,
		},
		{
			path: '/filter/:page',
			element: <FilterPage />,
		},
	],
	{ basename: '/TT_Valantis' }
);
