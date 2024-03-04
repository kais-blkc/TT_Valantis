import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './2_modules/Catalog/store/reducer';
import paginationSlice from './3_components/Pagination/store/reducer';

export const store = configureStore({
	reducer: {
		products: productsSlice,
		pagination: paginationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
