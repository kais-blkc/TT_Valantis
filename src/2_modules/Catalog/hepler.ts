import { IProduct } from '@/consts/product';

interface IIdsHashmap {
	[key: string]: number;
}

export function productListClearDuplicate(productList: IProduct[]) {
	const idsHashmap: IIdsHashmap = {};
	const result: IProduct[] = [];

	productList.map((product: IProduct) => {
		if (product.id in idsHashmap) return;
		idsHashmap[product.id] = 1;
		result.push(product);
	});

	return result;
}
