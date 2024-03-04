import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { getProductList, getProductsByFilter } from '../../store/thunks';
import { ProductList } from '@/3_components/ProductList';
import { Pagination } from '@/3_components/Pagination';
import { Loading } from '@/4_ui/Loading';
import { isObjEmpty } from '@/helper';
import { updateFilterFromLocalStorage } from '../../store/reducer';

export const CatalogFilterList: FC = () => {
	const dispatch = useAppDispatch();
	const { page, limit, offset } = useAppSelector((state) => state.pagination);
	const { products, loading, error, filter } = useAppSelector(
		(state) => state.products
	);

	useEffect(() => {
		if (isObjEmpty(filter)) {
			dispatch(updateFilterFromLocalStorage());
		}

		dispatch(getProductsByFilter(filter)).then((res) => {
			// @ts-expect-error: res.payload unknow
			const productIdsSlice = res.payload.slice(offset, limit * page);
			dispatch(getProductList(productIdsSlice));
		});
	}, [page, error, filter]);

	const filterResultText: ReactNode = (
		<ul>
			{filter.product && <li>Название: {filter.product}</li>}
			{filter.brand && <li>Бренд: {filter.brand}</li>}
			{filter.price && <li>Цена: {filter.price}</li>}
		</ul>
	);

	return (
		<>
			<div className="catalog">
				{loading && <Loading />}
				{error && <h3>{error}</h3>}

				{filter && (
					<div>
						<h3>Результат поиска: </h3>
						{filterResultText}
					</div>
				)}

				<ProductList products={products} />
			</div>

			<Pagination baseUrl="/filter/" />
		</>
	);
};
