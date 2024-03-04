import './style.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setFilter } from '../../store/reducer';
import { useNavigate } from 'react-router-dom';
import { BtnRounded } from '@/4_ui/Btns';
import useInput from '@/hooks/useInput';
import { FC, FormEvent } from 'react';

export const CatalogFilterForm: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { filter } = useAppSelector((state) => state.products);

	const product = useInput(filter.product || '');
	const brand = useInput(filter.brand || '');
	const price = useInput(filter.price?.toString() || '');

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const filterParams = {
			product: product.value || undefined,
			brand: brand.value || undefined,
			price: +price.value || undefined,
		};

		dispatch(setFilter(filterParams));

		if (product.value || brand.value || price.value) {
			navigate(`/filter/`);
		}
	};

	return (
		<div className="filter-product-form">
			<form onSubmit={submitHandler}>
				<input type="text" name="product" placeholder="Название" {...product} />
				<input type="text" name="brand" placeholder="Бренд" {...brand} />
				<input type="number" name="price" placeholder="Цена" {...price} />

				<BtnRounded>Поиск</BtnRounded>
			</form>
		</div>
	);
};
