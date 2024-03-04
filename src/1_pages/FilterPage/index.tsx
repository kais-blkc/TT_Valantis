import { FC } from 'react';
import Layout from '../Layout';
import { CatalogFilterForm, CatalogFilterList } from '@/2_modules/Catalog';

export const FilterPage: FC = () => {
	return (
		<Layout>
			<div className="filter-page">
				<div className="container">
					<CatalogFilterForm />
					<CatalogFilterList />
				</div>
			</div>
		</Layout>
	);
};
