import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct, IProductId } from '@/consts/product';
import { productListClearDuplicate } from '../hepler';
import {
	getProductIdList,
	getProductList,
	getProductsByFilter,
} from './thunks';

export interface IFilterParams {
	product?: string | undefined;
	brand?: string | undefined;
	price?: number | undefined;
}

interface IInitialState {
	products: IProduct[];
	productsId: IProductId[];
	loading: boolean;
	error: string | null;
	filter: IFilterParams;
}

const initialState: IInitialState = {
	products: [],
	productsId: [],
	loading: false,
	error: null,
	filter: {},
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<IFilterParams>) => {
			state.filter = action.payload;
			localStorage.setItem('filter', JSON.stringify(action.payload));
		},
		updateFilterFromLocalStorage: (state) => {
			const filter = localStorage.getItem('filter');

			if (filter) {
				state.filter = JSON.parse(filter);
			}
		},
	},
	extraReducers: (builder) => {
		// getProductIdList
		builder
			.addCase(getProductIdList.fulfilled, (state, action) => {
				state.productsId = action.payload;
			})
			.addCase(getProductIdList.pending, (state) => {
				state.loading = true;
			});

		// getProductsByFilter
		builder
			.addCase(getProductsByFilter.fulfilled, (state, action) => {
				state.productsId = action.payload;
				state.loading = false;
			})
			.addCase(getProductsByFilter.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProductsByFilter.rejected, (state, action) => {
				state.error = '' + action.payload;
				state.loading = false;
			});

		// getProductList
		builder
			.addCase(getProductList.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProductList.fulfilled, (state, action) => {
				state.products = productListClearDuplicate(action.payload);
				state.loading = false;
				state.error = null;
			})
			.addCase(getProductList.rejected, (state, action) => {
				state.error = '' + action.payload;
				state.loading = false;
			});
	},
});

export const { setFilter, updateFilterFromLocalStorage } =
	productsSlice.actions;
export default productsSlice.reducer;
