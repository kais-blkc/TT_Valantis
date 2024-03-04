import { HomePage } from '@/1_pages/HomePage';
import { FilterPage } from '@/1_pages/FilterPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/TT_Valantis/',
		element: <HomePage />,
	},
	{
		path: '/TT_Valantis/:page',
		element: <HomePage />,
	},
	{
		path: '/TT_Valantis/filter/',
		element: <FilterPage />,
	},
	{
		path: '/TT_Valantis/filter/:page',
		element: <FilterPage />,
	},
]);
