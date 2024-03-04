import './style.scss';
import { FC } from 'react';
import { ProductCard } from '@/3_components/ProductCard';
import { IProduct } from '@/consts/product';

interface IProductListProps {
	products: IProduct[];
}

export const ProductList: FC<IProductListProps> = ({ products }) => {
	const list = products.map((product, index) => (
		<ProductCard product={product} key={index}></ProductCard>
	));

	return <div className="product-list">{list}</div>;
};
