import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
	page: number;
	limit: number;
	offset: number;
}

const initialState: IInitialState = {
	page: 1,
	limit: 10,
	offset: 0,
};

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		updateOffset: (state) => {
			const res = (state.page - 1) * state.limit;
			state.offset = res;
		},
	},
});

export const { setPage, setLimit, updateOffset } = paginationSlice.actions;
export default paginationSlice.reducer;
