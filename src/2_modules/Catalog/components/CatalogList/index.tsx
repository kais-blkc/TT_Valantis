import './style.scss';
import { FC, useEffect } from 'react';
import { getProductIdList, getProductList } from '../../store/thunks';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { Pagination } from '@/3_components/Pagination';
import { Loading } from '@/4_ui/Loading';
import { ProductList } from '@/3_components/ProductList';

export const CatalogList: FC = () => {
	const dispatch = useAppDispatch();
	const { page, limit, offset } = useAppSelector((state) => state.pagination);
	const { products, loading, error } = useAppSelector(
		(state) => state.products
	);

	useEffect(() => {
		// Получение ids товаров;
		dispatch(getProductIdList({ limit, offset })).then((res) => {
			// Получение товаров со всеми характеристиками
			// @ts-expect-error: res.payload unknown
			dispatch(getProductList(res.payload));
		});

		// Зависимость от page и error:
	}, [page, error]);

	return (
		<>
			<div className="catalog">
				{loading && <Loading />}
				{error && <h3>{error}</h3>}

				<ProductList products={products} />
			</div>

			<Pagination />
		</>
	);
};
