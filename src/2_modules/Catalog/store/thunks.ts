import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAPIBody } from '@/consts/api';
import { apiFetch } from '@/api/actions';
import { IProduct, IProductId } from '@/consts/product';

interface IGetProductIdListProps {
	offset: number;
	limit: number;
}

interface IGetProductsByFilter {
	brand?: string;
	product?: string;
	price?: string | number;
}

interface IAPIBodyFilter extends IAPIBody {
	params: IGetProductsByFilter;
}

// Получение ids товаров
export const getProductIdList = createAsyncThunk<
	IProductId[],
	IGetProductIdListProps
>(
	'products/getProductIdList',
	async ({ offset, limit }, { rejectWithValue }) => {
		try {
			const body: IAPIBody = {
				action: 'get_ids',
				params: { limit, offset },
			};

			const data = await apiFetch(body);
			return data.result;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
			return rejectWithValue(error);
		}
	}
);

// Получение списка товаров с характеристеками
export const getProductList = createAsyncThunk<IProduct[], IProductId[]>(
	'products/getProductList',
	async (productIds, { rejectWithValue }) => {
		try {
			const body: IAPIBody = {
				action: 'get_items',
				params: { ids: productIds },
			};

			const data = await apiFetch(body);
			return data.result;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
			return rejectWithValue(error);
		}
	}
);

// Получение ids товаров по фильтру
export const getProductsByFilter = createAsyncThunk<
	IProductId[],
	IGetProductsByFilter
>(
	'products/getProductsByFilter',
	async ({ brand, price, product }, { rejectWithValue }) => {
		try {
			const body: IAPIBodyFilter = {
				action: 'filter',
				params: {},
			};

			if (brand) body.params['brand'] = brand;
			if (price) body.params['price'] = price;
			if (product) body.params['product'] = product;

			const data = await apiFetch(body);
			return data.result;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
			return rejectWithValue(error);
		}
	}
);
