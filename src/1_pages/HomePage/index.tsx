import { FC } from 'react';
import Layout from '../Layout';
import { CatalogFilterForm, CatalogList } from '@/2_modules/Catalog';

export const HomePage: FC = () => {
	return (
		<Layout>
			<div className="home-page">
				<div className="container">
					<CatalogFilterForm />
					<CatalogList />
				</div>
			</div>
		</Layout>
	);
};
