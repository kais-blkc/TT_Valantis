import './style.scss';
import { FC } from 'react';
import { IProduct } from '@/consts/product';

interface ICardProps {
	product: IProduct;
}

export const ProductCard: FC<ICardProps> = ({ product }) => {
	return (
		<div className="product-card">
			<div className="id">
				<b>ID:</b>
				<p>{product.id}</p>
			</div>
			<div className="product">
				<b>Название:</b>
				<p>{product.product}</p>
			</div>
			<div className="brand">
				<b>Бренд:</b>
				<p>{product.brand || 'Неизвестно'}</p>
			</div>
			<div className="price">
				<b>Цена:</b>
				<p>{product.price} ₽</p>
			</div>
		</div>
	);
};
